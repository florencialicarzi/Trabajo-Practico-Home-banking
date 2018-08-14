//Declaración de variables
var saldoCuenta = 10000;
var nombreUsuario = "Florencia Licarzi";
var limiteExtraccion = 5000;
var prestamo = 0;



//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();
actualizarPrestamoEnPantalla();

//Funciones gl. propias

function confPrompt(preDes, des, print)
{
  var preDes = prompt (print);
  var des = parseInt(preDes);
  return des;
}

function restaServicio (a, b)
{
  if (a<= saldoCuenta)
  {
    var preSaldo= saldoCuenta;
    restarSaldo(a);
    actualizarSaldoEnPantalla();
    alert("Has pagado el servicio " + b + "\n Saldo anterior: " + preSaldo + "\n Dinero descontado: " + a + "\n Saldo actual: " + saldoCuenta );
  }
  else {
    alert ("No tiene suficiente dinero para pagar este servicio.");
  }
}

//Funciones que tenes que completar
function sumarSaldo (sumarSaldoCuenta)
{
  saldoCuenta += sumarSaldoCuenta;
}

function restarSaldo (restarSaldoCuenta)
{
  saldoCuenta -= restarSaldoCuenta;
}

function cambiarLimiteDeExtraccion()
{
  var limiteExtraccionPre;
  limiteExtraccion = confPrompt (limiteExtraccionPre , limiteExtraccion , "¿Cual quiere que sea su limite de extraccion?");

  if(isNaN (limiteExtraccion))
  {
    alert ("Operacion cancelada | lo ingresado no es un numero");
  }
  else
  {
    actualizarLimiteEnPantalla();
    alert ("Su limite de extraccion actual es de: " + limiteExtraccion);
  }

}

function extraerDinero()
{
  var extraccionPre;
  var extraccion = confPrompt(extraccionPre, extraccion, "¿Cuanto dinero quiere extraer?:");

  if(isNaN (extraccion))
  {
      alert ("Operacion cancelada | lo ingresado no es un numero");
  }
  else
  {
          if ((extraccion <= limiteExtraccion) && (extraccion <= saldoCuenta) && (extraccion % 100 == 0))
          {
              var preSaldo = saldoCuenta;
              restarSaldo(extraccion);
              actualizarSaldoEnPantalla();
              alert("El saldo anterior era: " + preSaldo  + "\n La extraccion fue de: " + extraccion + "\n Su saldo actual es de: " + saldoCuenta);
          }
          else
          {
              if (extraccion > saldoCuenta)
              {
                alert("El monto que usted quiere extraer es mayor al que posee en su cuenta.");
              }

              if (extraccion > limiteExtraccion)
              {
                alert("La extraccion que usted quiere realizar es mayor a su limite de extraccion.");
              }

              if (extraccion % 100 !== 0)
              {
                alert("Solo puede extraer billetes de 100");
              }

          }
  }
}

function depositarDinero(deposito)
{
  var depositoPre;
  var deposito = confPrompt(depositoPre, deposito, "¿Cuanto dinero quiere depositar?");

  if(isNaN (deposito))
  {
    alert ("Operacion cancelada | lo ingresado no es un numero");
  }
  else
  {
      var preSaldo = saldoCuenta;
      sumarSaldo(deposito);
      actualizarSaldoEnPantalla();
      alert("El saldo anterior era: " + preSaldo  + "\n El valor del deposito es de: " + deposito + "\n Su saldo actual es de: " + saldoCuenta);
  }
}

function pagarServicio()
{
  var agua = 350;
  var telefono = 425;
  var luz = 210;
  var internet = 570;

  var preServicio;
  var servicio = confPrompt(preServicio, servicio, "Ingrese el numero que corresponda con el servicio que quieres pagar: \n 1- Agua \n 2- Telefono \n 3- Luz \n 4- Internet");

  switch (servicio)
  {
    case 1: restaServicio(agua, "Agua");
      break;
    case 2: restaServicio(telefono, "Telefono");
      break;
    case 3: restaServicio(luz, "Luz");
      break;
    case 4: restaServicio(internet, "Internet");
      break;
    default: alert("El numero ingresado es incorrecto, intentelo de nuevo.");
  }

}

function transferirDinero()
{
     var cuentaAmiga1 = 1234567;
     var cuentaAmiga2 = 7654321;
     var preTransferencia;
     var transferencia = confPrompt(preTransferencia, transferencia, "¿Cuanto dinero desea transferir?");
     if(isNaN (transferencia))
     {
       alert ("Operacion cancelada | lo ingresado no es un numero");
     }
     else
     {

                 if(transferencia <= saldoCuenta)
                 {
                         var preCuenta;
                         var cuenta = confPrompt(preCuenta, cuenta, "Ingrese el numero de cuenta amiga a la que desea transferir el dinero");

                         if((cuenta == cuentaAmiga1) || (cuenta == cuentaAmiga2))
                         {
                           restarSaldo(transferencia);
                           alert("Se han transferido: " + transferencia + " \n Cuenta destino: " + cuenta);
                           actualizarSaldoEnPantalla();
                         }
                         else
                         {
                           alert("Solo puede transferir dinero a cuentas amigas.");
                         }
                 }
                 else
                 {
                   alert("Su saldo no es suficiente para realizar la transferencia.");
                 }
      }
}

function iniciarSesion()
{
  var codigoCuenta = 1317;
  var preConfCodigo;
  var confCodigo = confPrompt(preConfCodigo, confCodigo, "Ingrese su codigo:");
  if(confCodigo == codigoCuenta)
  {
    alert("Bienvenido " + nombreUsuario + " ya puedes comenzar a realizar operaciones");
  }
  else
  {
    alert("Su codigo es incorrecto, por cuestiones de seguridad resguardamos todo su saldo.")
    saldoCuenta = 0;
    actualizarSaldoEnPantalla();
  }
}

function solicitarPrestamo()
{
  if(prestamo == 0)
  {
    var prePrestamo;
    prestamo = confPrompt(prePrestamo, prestamo, "¿Cuanto dinero desea solicitarle al banco? \nPuede pedir hasta $5000, luego debera devolver el monto mas $1000 de interes");

    if(isNaN (prestamo))
    {
      alert ("Operacion cancelada | lo ingresado no es un numero");
      prestamo = 0;
    }
    else
    {
        if(prestamo <= 5000)
        {
          alert("Su prestamo a sido procesado con exito");
          sumarSaldo(prestamo);
          actualizarSaldoEnPantalla();
          prestamo += 1000;
          actualizarPrestamoEnPantalla();
        }
        else
        {
          alert("El monto ingresado no es valido");
          prestamo = 0;
        }
    }
  }

  else
  {
    alert("Usted todavia debe el pago de un prestamo anterior");
  }

}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

function actualizarPrestamoEnPantalla() {
    document.getElementById("prestamo").innerHTML = "Monto a devolver debido a prestamos: $" + prestamo;
}

//El codigo no se ejecutaba correctamente, Francisco recomendo llamar a la funcion al final del codigo para que esta se ejecute.
iniciarSesion();
