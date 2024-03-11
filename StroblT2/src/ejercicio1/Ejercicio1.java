/*
 * OBJETIVO: Realizar un programa que pruebe metodos de la clase teatro
 * 
 * AUTOR: Alex Strobl
 * 
 * FECHA: 11/03/2024
 */
package ejercicio1;

import libtarea3.Teatro;

public class Ejercicio1 {

	public static void main(String[] args) {
		
		//Creamos teatro1, asignamos obra y compramos 100 entradas
		Teatro teatro1 = new Teatro();
		
		teatro1.asignarObra("La verbena de la paloma");
		
		teatro1.comprarEntradas(100); 
		
		//Intentamos comprar entradas aleatorias
		try {
			int entradas = entradasAleatorias();
			System.out.println("Se intentarán comprar "+ entradas + " entradas en el teatro 1");
			teatro1.comprarEntradas(entradas);
		} catch (Exception e) {
			int entradasDisponibles = teatro1.getAforo() - teatro1.getEntradasVendidas() ;
			System.out.println("Aforo completo. Se compraron "+ entradasDisponibles + " entradas disponibles en el teatro 1");
			teatro1.comprarEntradas(entradasDisponibles);
		} // Compramos entradas disponibles si no hay
		
		Teatro teatro2 = new Teatro("Cervantes", 500); //Crear tatro cervantes y traspasar obra
		
		teatro1.traspasarObra(teatro2);
		
		//Intentamos comprar entradas aleatorias
		try {
			int entradas = entradasAleatorias();
			System.out.println("Se intentarán comprar "+ entradas + " entradas en el teatro 2");
			teatro2.comprarEntradas(entradas);
		} catch (Exception e) {
			int entradasDisponibles = teatro2.getAforo() - teatro2.getEntradasVendidas() ;
			System.out.println("Aforo completo. Se compraron "+ entradasDisponibles + " entradas disponibles en el teatro 2");
			teatro2.comprarEntradas(entradasDisponibles);
		} // Compramos entradas disponibles si no hay
		
		
		//Intentamos devolver entradas aleatorias
		try {
			int entradas = entradasAleatorias();
			System.out.println("Se intentarán devolver "+ entradas + " entradas en el teatro 2");
			teatro2.devolverEntradas(entradas);
		} catch (Exception e) {
			int entradasVendidas = teatro2.getEntradasVendidas() ;
			System.out.println("Aforo completo. Se devolveran "+ entradasVendidas + " entradas disponibles en el teatro 2");
			teatro2.devolverEntradas(entradasVendidas);
		} // Devolvemos todas las entradas disponibles si no hay
		
		
		// Teatro teatro3 = (Teatro) teatro2.clone(); // clonar tratro
		
		
		//número de teatros creados.
		// número de obras que se están representando.
		// número de entradas vendidas en todos los teatros.
		System.out.println("\n"+Teatro.getTeatrosTotales() + " teatros creados totales\n");
		System.out.println(Teatro.getObrasActivas() + " obras representandose\n");
		System.out.println(Teatro.getEntradasVendidasTotales() + " entradas vendidas totales\n");
		
	}
	
	public static int entradasAleatorias() {	// Entradas aleatorioas
		int entradas = (int) (Math.random() * (15 + 1)) * 100; 

		return entradas;
	}
	
	
	
}
