package com.company;
import java.util.Scanner;

import com.sun.xml.internal.ws.api.model.wsdl.WSDLOutput;

public class Main {

    public static void siguienteNumero(int n) { // definimos un
        // método que recibe como argmento un número
        n = n + 1; // incrementamos el número
        System.out.println(
                "El número que le sigue a la variable a es: " + n);
        //imprimimos el valor
    }

    public static void main(String[] args) {
        System.out.println(
                "Hola, Mundo!"); // todas las sentencias terminan en punto y coma

        /*
        Esto es un comentario de
        varias líneas
        */

        int a = 20; // creamos una variable primitiva que se llama "a"
        System.out.println("El valor de a es: " + a); // imprimimos
        // el valor de a
        siguienteNumero(a);

        int x = 10;

        if (x > 5) {
            System.out.println("La variable x es mayor a 5");
        }

        if (x > 15) {
            System.out.println("La variable es mayor a 15");
        } else {
            System.out.println("La variable es menor a 15");
        }

        if (x >= 100) {
            System.out.println("La variable x es mayor o igual a 100");
        } else if (x >= 50) {
            System.out.println("La variable x es mayor o igual a 50");
        } else if (x >= 20) {
            System.out.println("La variable x es mayor o igual a 20");
        } else {
            System.out.println("La variable x es menor a 20");
        }

        // tipo de datos
        /* ----- boolean ----- */

        boolean b = true;
        if (b == true) {
            System.out.println("La variable B es de tipo Boolean " + b);
        }

        // sout + tab = System.out.printlt();

        boolean c; // se puede declarar sin inicializarla
        c = false; // y darle valor después
        System.out.println("La variable C es " + c);

        if (c) System.out.println("Si es true, se va a ejecutar esta línea");

        c = true; // cambia el valor
        System.out.println("Ahora C es :" + c);

        if (c) System.out.println("Si es true, se va a ejecutar esta línea");

        System.out.println("5 > 2 es: " + (5>2)); // el resultado de un operador relacional es un valor booleano. El paréntesis es necesario porque
        // está el operador + que tiene mayor precedencia que ><

        // byte

        /*byte d= 126;
        System.out.println("Variable byte: " + d);

        d++;
        System.out.println("Variable byte ++" + d); //127

        d++;
        System.out.println("Variable byte ++ (de nuevo)" + d); // pasa a -128, porque se pasa del rango

        // char

        char e = 'C'; // Siempre entre comillas simples, las dobles tiran error
        //char e = "C"; Error
        System.out.println("Variable char: " + e);

        // int

        int f = 2020, g = 2021, h = 2022; //son del mismo tipo, se pueden declarar separados por comas
        System.out.println("Variables int: " + f + ", " + g + ", " + h);

        // short ( pocos números)

        short i = 2000;
        System.out.println("Variable short: " + i);

        // long siempre termina con L mayúscula

        long j = 200L;
        System.out.println("Variable long: " + j);

        // double termina con d minúscula

        double k = 7.135565d;
        System.out.println("Variable double: " + k);

        // float

        float l = 4.34f;
        System.out.println("Variable float: " + l);

        // string

        String miCadena = new String("Cadena de texto");
        System.out.println(miCadena);

        String mi_cadena = "Otra cadena de texto";
        System.out.println(mi_cadena);*/

        /* La diferencia es que en el primer ejemplo instanciamos la clase y en el segunod java crea el objeto string para esa cadena*/

        /*miCadena = "Valor modificado";
        System.out.println(miCadena);*/

        // entrada de datos
        /*Scanner entrada = new Scanner(System.in);

        String usuario = entrada.nextLine(); /* creamos una variable y le asignamos un valor que va a ser el que ingresa el usuario, llamamos a la
        instancia de Scanner y con el método nextLine() vamos a tener una línea para ingresar los datos */

        //System.out.println("Mi usuario es " + usuario);

        // if con entrada de datos

        Scanner entrada = new Scanner(System.in);
        int numero = entrada.nextInt();

        if (numero > 50) {
            System.out.println("El número es mayor a 50");
        } else {
            System.out.println("El número es menor o igual a 50");
        }

        // switch

        switch (numero) {
            case 1:
                System.out.println("El número es 1");
                break;
            case 10:
                System.out.println("El número es 10");
                break;
            case 100:
                System.out.println("El número es 100");
                break;
            case 1000:
                System.out.println("El número es 1000");
                break;
            default:
                System.out.println("Es otro número");
        }
        // for
        System.out.println("Tabla de multiplicar del: " + numero);
        for (int i = 1; i <= 10; i++) {
            System.out.println(numero + " x " + i + " = " + (numero*i));
        }

        // While
        System.out.println("Tabla de Multiplicar del: " + numero + " con While");
        int w = 1;
        while(w <= 10) {
            System.out.println(numero + " x " + w + " = " + (w * numero));
            w++;
        }
    }

}
