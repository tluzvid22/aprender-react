/*
 * OBJETIVO: Clase padre inmueble
 * 
 * AUTOR: Alex Strobl
 * 
 * FECHA: 11/03/2024
 */
package ejercicio2;

import java.time.LocalDate;

abstract class Inmueble {


	// ATRIBUTOS DE CLASE INMUTABLES//

	// ATRIBUTOS DE CLASE MUTABLES//
	private static int numInmuebles;
	private static int ultAnio;
	public static final int SUPERFICIEDEFAULT = 100;
	public static final String PROPIETARIODEFAULT = "Sin propietario";
	public static final String DIRECCIONDEFAULT = "Sin dirección";
	
	static {
		ultAnio = LocalDate.now().getYear();
		numInmuebles = 0;
	}
	
	// ATRIBUTOS DE OBJETO INMUTABLES//

	// ATRIBUTOS DE OBJETO MUTABLES//
	private String id;
	private int superficie;
	private String propietario;
	private LocalDate fechaEntrada;
	private String direccion;
	
	// CONSTRUCTOR(ES)//
	public Inmueble(int superficie, String propietario, String direccion) throws MaximoInmuebles {
		String idNuevo = generaCodigo();
		if (idNuevo == null) {
			throw new MaximoInmuebles("Has superado el máximo de inmuebles");
		}
		this.id = idNuevo;		
		if (superficie < 60 || superficie > 150) {
			this.superficie = SUPERFICIEDEFAULT;
		} else {
			this.superficie = superficie;
		}
		if (propietario == null) {
			this.propietario = PROPIETARIODEFAULT;
		}else {
			this.propietario = propietario;
		}
		if (direccion == null) {
			this.direccion = DIRECCIONDEFAULT;
		}else {
			this.direccion = direccion;
		}
		this.fechaEntrada = LocalDate.now();
	}
	// GETTERS Y SETTERS
	
	public static int getNumInmuebles() {
		return numInmuebles;
	}



	public static void setNumInmuebles(int numInmuebles) {
		Inmueble.numInmuebles = numInmuebles;
	}



	public static int getUltAnio() {
		return ultAnio;
	}



	public static void setUltAnio(int ultAnio) {
		Inmueble.ultAnio = ultAnio;
	}



	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}



	public int getSuperficie() {
		return superficie;
	}



	public void setSuperficie(int superficie) {
		this.superficie = superficie;
	}



	public String getPropietario() {
		return propietario;
	}



	public void setPropietario(String propietario) {
		this.propietario = propietario;
	}



	public LocalDate getFechaEntrada() {
		return fechaEntrada;
	}



	public void setFechaEntrada(LocalDate fechaEntrada) {
		this.fechaEntrada = fechaEntrada;
	}



	public String getDireccion() {
		return direccion;
	}



	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}



	public static int getSuperficiedefault() {
		return SUPERFICIEDEFAULT;
	}



	public static String getPropietariodefault() {
		return PROPIETARIODEFAULT;
	}



	public static String getDirecciondefault() {
		return DIRECCIONDEFAULT;
	}
	
	// METODOS//
	

	

	// METODOS PRIVADOS//
	private String generaCodigo() {
		if (LocalDate.now().getYear() != ultAnio) {
			ultAnio = LocalDate.now().getYear();
			numInmuebles = 0;
		}

		String idAnio = String.valueOf(LocalDate.now().getYear()).substring(2, 4); // Almacena las ultimas dos
		numInmuebles++; // cifras del ultimo anio
		if (String.valueOf(numInmuebles).length() == 1) {
			return (idAnio + "00" + numInmuebles);
		} else if (String.valueOf(numInmuebles).length() == 2) {
			return (idAnio + "0" + numInmuebles);
		} else if (String.valueOf(numInmuebles).length() == 3) {
			return (idAnio + numInmuebles);
		} else {
			numInmuebles--;
			return null;
		}
		// Devolvera un codigo u otro en funcion del numero de inmuebles existentes
	}	

	@Override
	public String toString() {
		return "Inmueble [id=" + id + ", superficie=" + superficie + ", propietario=" + propietario + ", fechaEntrada="
				+ fechaEntrada + ", direccion=" + direccion + "]";
	}

	public class MaximoInmuebles extends Exception {
	    public MaximoInmuebles() {
	        super("Se ha excedido el número máximo de inmuebles permitidos.");
	    }

	    public MaximoInmuebles(String mensaje) {
	        super(mensaje);
	    }
	}
	
}
