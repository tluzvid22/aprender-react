/*
 * OBJETIVO: Clase local hereda inmueble
 * 
 * AUTOR: Alex Strobl
 * 
 * FECHA: 11/03/2024
 */
package ejercicio2;

import java.time.LocalDate;

public class Local extends Inmueble {

	private int distanciaKm;
	private boolean alquilado;
	private double valor;
	
	public Local(int superficie, String propietario, String direccion, int distanciaKm,
			boolean alquilado, double valor) throws MaximoInmuebles {
		super(superficie, propietario, direccion);
		this.distanciaKm = distanciaKm;
		this.alquilado = alquilado;
		
		this.valor = valor;
		if (alquilado) {
			this.valor = this.valor*1.2;
		}
		
		if (distanciaKm > 2) {
			this.valor = this.valor*0.8;
		}
		
	}
	
	public int getDistanciaKm() {
		return distanciaKm;
	}
	public void setDistanciaKm(int distanciaKm) {
		this.distanciaKm = distanciaKm;
	}
	public boolean isAlquilado() {
		return alquilado;
	}
	public void setAlquilado(boolean alquilado) {
		this.alquilado = alquilado;
	}
	public double getValor() {
		return valor;
	}
	public void setValor(double valor) {
		this.valor = valor;
	}

	@Override
	public String toString() {
		return "Local [distanciaKm=" + distanciaKm + ", alquilado=" + alquilado + ", valor=" + valor + ", toString()="
				+ super.toString() + "]";
	}
	
	
	
	
	
	
}
