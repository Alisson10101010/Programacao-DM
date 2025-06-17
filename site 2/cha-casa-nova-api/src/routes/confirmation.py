from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from src.models.user import db
from src.models.confirmation import Confirmation

confirmation_bp = Blueprint('confirmation', __name__)

@confirmation_bp.route('/confirmations', methods=['POST'])
@cross_origin()
def create_confirmation():
    """Cria uma nova confirmação de presença"""
    try:
        data = request.get_json()
        
        # Validação dos dados obrigatórios
        if not data.get('name'):
            return jsonify({'error': 'Nome é obrigatório'}), 400
        
        if not data.get('attending'):
            return jsonify({'error': 'Confirmação de presença é obrigatória'}), 400
        
        # Criar nova confirmação
        confirmation = Confirmation(
            name=data['name'],
            companion=data.get('companion', ''),
            attending=data['attending']
        )
        
        # Adicionar presentes se fornecidos
        if data.get('gifts'):
            confirmation.set_gifts(data['gifts'])
        
        # Salvar no banco
        db.session.add(confirmation)
        db.session.commit()
        
        return jsonify({
            'message': 'Confirmação recebida com sucesso!',
            'confirmation': confirmation.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': f'Erro interno: {str(e)}'}), 500

@confirmation_bp.route('/confirmations', methods=['GET'])
@cross_origin()
def get_confirmations():
    """Lista todas as confirmações (para os noivos)"""
    try:
        confirmations = Confirmation.query.order_by(Confirmation.created_at.desc()).all()
        return jsonify({
            'confirmations': [conf.to_dict() for conf in confirmations],
            'total': len(confirmations)
        })
    except Exception as e:
        return jsonify({'error': f'Erro interno: {str(e)}'}), 500

@confirmation_bp.route('/confirmations/<int:confirmation_id>', methods=['GET'])
@cross_origin()
def get_confirmation(confirmation_id):
    """Busca uma confirmação específica"""
    try:
        confirmation = Confirmation.query.get_or_404(confirmation_id)
        return jsonify(confirmation.to_dict())
    except Exception as e:
        return jsonify({'error': f'Erro interno: {str(e)}'}), 500

@confirmation_bp.route('/stats', methods=['GET'])
@cross_origin()
def get_stats():
    """Retorna estatísticas das confirmações"""
    try:
        total_confirmations = Confirmation.query.count()
        attending_yes = Confirmation.query.filter_by(attending='sim').count()
        attending_no = Confirmation.query.filter_by(attending='nao').count()
        
        # Contar acompanhantes
        companions = Confirmation.query.filter(
            Confirmation.companion.isnot(None),
            Confirmation.companion != '',
            Confirmation.attending == 'sim'
        ).count()
        
        return jsonify({
            'total_confirmations': total_confirmations,
            'attending_yes': attending_yes,
            'attending_no': attending_no,
            'total_guests': attending_yes + companions,
            'companions': companions
        })
    except Exception as e:
        return jsonify({'error': f'Erro interno: {str(e)}'}), 500

