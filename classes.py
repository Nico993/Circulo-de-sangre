class Cliente:
    def __init__(self,name, dni):
        self.name = name
        self.dni = dni
    
    def __str__(self):
        return f"Nombre: {self.name}"