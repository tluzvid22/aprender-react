/*
 * OBJETIVO: Clase testeo inmuebles
 * 
 * AUTOR: Alex Strobl
 * 
 * FECHA: 11/03/2024
 */
package ejercicio2;

import java.time.LocalDate;

import ejercicio2.Inmueble.MaximoInmuebles;

public class Ejercicio2 {

	public static void main(String[] args) throws MaximoInmuebles {
	
		System.out.println("Crea una casa con valores por defecto");
		Vivienda vivienda = new Vivienda(0, null, null, 2, 2, LocalDate.of(2000, 10, 10), 200);
		System.out.println(vivienda.toString());
		
		System.out.println("\nCalcula los años que tiene la casa");
		System.out.println(LocalDate.now().getYear() - vivienda.getFechaConstruccion().getYear() + " anios");

		
		System.out.println("\nCalcula el precio de venta");
		System.out.println(vivienda.getValorVenta()+ " es el precio de venta");

		System.out.println("\nCrea un local comercial con valores por defecto");
		Local local = new Local(0, null, null, 2, true, 200);
		System.out.println(local.toString());

		System.out.println("\nCalcula el tiempo que lleva en el sistema.");
		System.out.println(LocalDate.now().getYear() - local.getFechaEntrada().getYear() + " anios en el sistema");
		
		System.out.println("\nCrea una casa con una superficie de 90 m² , del propietario Juan García y dirección Avenida del Mediterráneo, s/n y 3 habitaciones.");
		Vivienda vivienda2 = new Vivienda(90, "Juan García", "Avenida del Mediterráneo, s/n.", 3, 2, LocalDate.of(2000, 10, 10), 200);
		System.out.println(vivienda2.toString());
		
		System.out.println("\nCrea un local comercial con una superficie de 140m² , del propietario Pedro López y dirección Calle del agua, 10, que está a 5 kms. Del centro de la ciudad y está alquilado.");
		Local local2 = new Local(140, "Pedro López", "Calle del agua, 10", 5, true, 200);
		System.out.println(local2.toString());

		
	}
	
}
