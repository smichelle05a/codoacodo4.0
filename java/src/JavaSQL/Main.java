package JavaSQL;

//import java.sql.*;
import java.sql.*;

public class Main {
    public static void  main(String[] args) {
        // Conexión
        String url = "jdbc:mysql://localhost:3306/usuarios";
        String user = "root";
        String password = "h4rryp0773r";

        // Campos
        String campoId = "id";
        String campoNombre = "nombre";
        String campoApellido = "apellido";
        String campoEmail = "email";

        // Consultas
        String consultaSelect = "SELECT * FROM usuarios"; // acá adentro vamos a poner la consulta
        String consulta2 = "SELECT * FROM usuarios WHERE id = 1";

        try {
            //Conexión
            Connection mysql = DriverManager.getConnection(url, user, password);



            //Statement
            Statement hojaVirtual = mysql.createStatement();
            ResultSet resultado = hojaVirtual.executeQuery(consultaSelect);

            //Mostrar Datos
            while (resultado.next()) { //nos movemos fila por fila y preguntamos si hay información válida
                System.out.println(resultado.getString(campoId));
                System.out.println(resultado.getString(campoNombre));
                System.out.println(resultado.getString(campoApellido));
                System.out.println(resultado.getString(campoEmail));
            }

            resultado = hojaVirtual.executeQuery(consulta2);
            System.out.println("---------- Select Consulta 2 ----------");
            while (resultado.next()) {
                System.out.println(resultado.getString(campoId));
                System.out.println(resultado.getString(campoNombre));
                System.out.println(resultado.getString(campoApellido));
                System.out.println(resultado.getString(campoEmail));
            }

            // Update
            hojaVirtual.executeUpdate(queryUpdate);
            resultado = hojaVirtual.executeQuery(consulta2);

        } catch (SQLException error) {
            System.out.println("Error");
            error.printStackTrace();
        }
        // System.out.println(2*2);
    }

}
