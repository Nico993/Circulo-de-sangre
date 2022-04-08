from datetime import *
from categoria import *
from Sangre import *
today = date.today()

class Socio:
    def __init__(self,Nombre, Apellido, Dni, FechaNacimiento, Domicilio, Localidad, Telefono, Email, Enfermedad, Medicamentos, NombreMedicamentos, TipoSangre, Categoria):
        self.Nombre = Nombre
        self.Apellido = Apellido
        self.Dni = Dni
        self.FechaNacimiento = FechaNacimiento
        self.Domicilio = Domicilio
        self.Localidad = Localidad
        self.Telefono = Telefono
        self.Email = Email
        self.Enfermedad = Enfermedad
        self.Medicamentos = Medicamentos
        self.NombreMedicamentos = NombreMedicamentos
        self.TipoSangre = TipoSangre
        self.Categoria = Categoria
        self.DefineCategory()
        self.DefineBloodType()

    
    def __str__(self):
        return f"\nNombre: {self.Nombre}\nApellido: {self.Apellido}\nDni: {self.Dni}\nFecha de nacimiento: {self.FechaNacimiento}\nEdad: {self.DefineCategory()}\nDomicilio: {self.Domicilio}\nLocalidad: {self.Localidad}\nNumero de telefono: {self.Telefono}\nEmail: {self.Email}\nEnfermedad: {self.Enfermedad}\nMedicacion: {self.Medicamentos}\nNombre de medicacion: {self.NombreMedicamentos}\nTipo de sangre: {self.TipoSangre.Tipo}\nCategoria: {self.Categoria.Nombre}"
    
    
    def DefineCategory(self):
        Age = self.Age()
        if (Age >= 18 and Age <= 56):
            if (self.Enfermedad.upper() == "S" and self.Medicamentos.upper() == "S"):
                self.Categoria = Pasivo
            else:
                self.Categoria = Activo
        else:
            self.Categoria = Pasivo
        return Age

    def Age(self):
        SplitDate = self.FechaNacimiento.split("/") 
        birth = datetime(int(SplitDate[0]),int(SplitDate[1]),int(SplitDate[2]))
        age = today.year - birth.year - ((today.month, today.day) < (birth.month, birth.day))
        return age

    
    
    def DefineBloodType(self):
        if self.TipoSangre.upper() == "A":
            self.TipoSangre = TipoA
        elif self.TipoSangre.upper() == "B":
            self.TipoSangre = TipoB
        elif self.TipoSangre.upper() == "AB":
            self.TipoSangre = TipoAB
        elif self.TipoSangre.upper() == "O":
            self.TipoSangre = TipoO
            





