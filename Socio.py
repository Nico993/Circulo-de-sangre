from datetime import *
from categoria import *
from Sangre import *
today = date.today()

class Socio:
    def __init__(self,Name, LastName, Dni, DateOfBirth, Address, Locality, PhoneNumber, Email, Disease, Medication, MedicationName, BloodType, Category):
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
        self.MedicationName = MedicationName
        self.BloodType = BloodType
        self.Category = Category
        self.DefineCategory()
        self.DefineBloodType()

    
    def __str__(self):
        return f"\nNombre: {self.Name}\nApellido: {self.LastName}\nDni: {self.Dni}\nFecha de nacimiento: {self.DateOfBirth}\nEdad: {self.DefineCategory()}\nDirección: {self.Address}\nLocalidad: {self.Locality}\nNumero de telefono: {self.PhoneNumber}\nEmail: {self.Email}\nEnfermedad: {self.Desease}\nMedicacion: {self.Medication}\nNombre de medicacion: {self.MedicationName}\nTipo de sangre: {self.BloodType.Type}\nCategoria: {self.Category.Name}"
    
    
    def DefineCategory(self):
        Age = self.Age()
        if (Age >= 18 and Age <= 56):
            if (self.Desease.upper() == "S" and self.Medication.upper() == "S"):
                self.Category = Pasive
            else:
                self.Category = Active
        else:
            self.Category = Pasive
        return Age

    def Age(self):
        SplitDate = self.DateOfBirth.split("/") 
        birth = datetime(int(SplitDate[0]),int(SplitDate[1]),int(SplitDate[2]))
        age = today.year - birth.year - ((today.month, today.day) < (birth.month, birth.day))
        return age

    
    
    def DefineBloodType(self):
        if self.BloodType.upper() == "A":
            self.BloodType = TypeA
        elif self.BloodType.upper() == "B":
            self.BloodType = TypeB
        elif self.BloodType.upper() == "AB":
            self.BloodType = TypeAB
        elif self.BloodType.upper() == "O":
            self.BloodType = TypeO
            





