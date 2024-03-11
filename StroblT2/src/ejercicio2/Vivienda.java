/*
 * OBJETIVO: Clase vivienda hereda inmueble
 * 
 * AUTOR: Alex Strobl
 * 
 * FECHA: 11/03/2024
 */
package ejercicio2;

import java.time.LocalDate;

public class Vivienda extends Inmueble {

	private int numHabitaciones;
	private int numBanios;
	private LocalDate fechaConstruccion;
	private int valorm2;
	private double valorVenta;
	
	
	public Vivienda(int superficie, String propietario, String direccion,
			int numHabitaciones, int numBanios, LocalDate fechaConstruccion, int valorm2) throws MaximoInmuebles {
		super(superficie, propietario, direccion);
		this.numHabitaciones = numHabitaciones;
		this.numBanios = numBanios;
		this.fechaConstruccion = fechaConstruccion;
		this.valorm2 = valorm2;
		
		this.valorVenta = super.getSuperficie()*this.valorm2;
		
		if (fechaConstruccion.isBefore(LocalDate.of(2000, 1, 1))) {
			this.valorVenta = valorVenta * 0.6;
		}
		
	}


	public int getNumHabitaciones() {
		return numHabitaciones;
	}


	public void setNumHabitaciones(int numHabitaciones) {
		this.numHabitaciones = numHabitaciones;
	}


	public int getNumBanios() {
		return numBanios;
	}


	public void setNumBanios(int numBanios) {
		this.numBanios = numBanios;
	}


	public LocalDate getFechaConstruccion() {
		return fechaConstruccion;
	}


	public void setFechaConstruccion(LocalDate fechaConstruccion) {
		this.fechaConstruccion = fechaConstruccion;
	}


	public int getValorm2() {
		return valorm2;
	}


	public void setValorm2(int valorm2) {
		this.valorm2 = valorm2;
	}


	public double getValorVenta() {
		return valorVenta;
	}


	public void setValorVenta(double valorVenta) {
		this.valorVenta = valorVenta;
	}


	@Override
	public String toString() {
		return "Vivienda [numHabitaciones=" + numHabitaciones + ", numBanios=" + numBanios + ", fechaConstruccion="
				+ fechaConstruccion + ", valorm2=" + valorm2 + ", valorVenta=" + valorVenta + ", toString()="
				+ super.toString() + "]";
	}
	
	


	
	
	

	

}
