from ipaddress import AddressValueError


class Socio:
    def __init__(self,Name, LastName, Dni, DateOfBirth, Address, Locality, PhoneNumber, Email, Disease, Medication):
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
    
    def __str__(self):
        return f"Nombre: {self.Name}"