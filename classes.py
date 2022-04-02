from datetime import *
today = date.today()
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
        self.BloodType = BloodType
        self.Category = Category
    
    def __str__(self):
        return f"\nNombre: {self.Name}\nApellido: {self.LastName}\nDni: {self.Dni}\nFecha de nacimiento: {self.DateOfBirth}\nEdad: {self.Age()}\nDirección: {self.Address}\nLocalidad: {self.Locality}\nNumero de telefono: {self.PhoneNumber}\nEmail: {self.Email}\nEnfermedad: {self.Desease}\nMedicacion: {self.Medication}\nTipo de sangre: {self.BloodType.Type}\nCategoria: {self.Category.Name}"
    
    def Age(self):
        SplitDate = self.DateOfBirth.split("/") 
        birth = datetime(int(SplitDate[0]),int(SplitDate[1]),int(SplitDate[2]))
        age = today.year - birth.year - ((today.month, today.day) < (birth.month, birth.day))
        return age


class Sangre:
    def __init__(self, Type):
        self.Type = Type


class Categoria:
    def __init__(self,Name, Price):
        self.Name = Name
        self.Price = Price

