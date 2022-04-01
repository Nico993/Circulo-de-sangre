class Socio:
    def __init__(self,Name, LastName, Dni, DateOfBirth, Address, Locality, PhoneNumber, Email, Disease, Medication, BloodType, Category):
        self.Name = Name
        self.LastName = LastName
        self.Dni = Dni
        self.DateOfBirth = DateOfBirth
        self.Address = Address
        self.Locality = Locality
        self.PhoneNumber = PhoneNumber
        self.Email = Email
        self.Desease = Disease
        self.Medication = Medication
        self.Type = BloodType
        self.Category = Category
    
    def __str__(self):
        return f"Nombre: {self.Name}"

class Sangre:
    def __init__(self, Type):
        self.Type = Type


class Categoria:
    def __init__(self,Name, Price):
        self.Name = Name
        self.Price = Price

