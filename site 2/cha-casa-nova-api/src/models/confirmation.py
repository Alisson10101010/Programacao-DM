from src.models.user import db
from datetime import datetime
import json

class Confirmation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    companion = db.Column(db.String(200), nullable=True)
    attending = db.Column(db.String(10), nullable=False)  # 'sim' ou 'nao'
    gifts = db.Column(db.Text, nullable=True)  # JSON string com lista de presentes
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f'<Confirmation {self.name}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'companion': self.companion,
            'attending': self.attending,
            'gifts': json.loads(self.gifts) if self.gifts else [],
            'created_at': self.created_at.isoformat()
        }
    
    def set_gifts(self, gifts_list):
        """Converte lista de presentes para JSON string"""
        self.gifts = json.dumps(gifts_list) if gifts_list else None
    
    def get_gifts(self):
        """Retorna lista de presentes do JSON string"""
        return json.loads(self.gifts) if self.gifts else []

