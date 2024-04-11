import { useState } from "react";
import BannerImg from "../../assets/images/ujed banner.jpg"
import GenericBanner from "../../components/genericBanner";
import GenericSection from "../../components/genericSection";

import MainNav from "../../components/mainNav";
import PageSwitch from "../../components/pageSwitch";
import Footer from "../../components/footer";


function RecursosHumanos() {

    const stateList = ["Servicios DDGRH", 
    "Coordinación de personal académico",
    "Coordinación de personal administrativo",
    "Prestaciones económicas",
    "Generalidades",

    ]

    const [curState,setCurState] = useState(stateList[0]);

    function States() {
        switch (curState) {
            case "Servicios DDGRH":
                return(
                    <GenericSection title={"Servicios"}>
                        <div className="subtitle">
                        Actualización de datos específicos.
                        </div>
                        <p>
                        La actualización de los datos se realiza en el <a href="https://sistemas.ujed.mx/PersonalUJED/">Portal Personal de la Ujed</a>
                        </p>

                        <div className="subtitle">
                        Actualización de tallas
                        </div>
                        <p>
                        La actualización de los datos se realiza en el <a href="https://sistemas.ujed.mx/PersonalUJED/">Portal Personal de la Ujed</a>
                        </p>

                        <div className="subtitle">
                        Actualización de datos del Seguro de Vida
                        </div>
                        <p>
                        Para actualizar los datos se debe acudir directamente en la Dirección de Desarrollo y Gestión de Recursos Humanos.
                        </p>

                        <div className="subtitle">
                        Matrículas
                        </div>

                        <p>
                        Para generar matrícula, se deberá entregar copia de la siguiente documentación con el/la coordinador(a) encargada de la URES:
                        </p>
                        <br />
                        <ul>
                            <li>
                            Acta de nacimiento (formato nuevo).
                            </li>
                            <li>
                            CURP (formato nuevo).
                            </li>
                            <li>
                            RFC del SAT.
                            </li>
                            <li>
                            Comprobante de domicilio (reciente).
                            </li>
                            <li>
                            Currículum.
                            </li>
                            <li>
                            Comprobantes de grados de estudio.
                            </li>
                        </ul>

                        <br />

                        <div className="subtitle">
                        Modificaciones de R.F.C.
                        </div>

                        <p>
                        Acude al departamento de Transparencia con la copia de R.F.C. emitido por el SAT.
                        </p>

                        <div className="subtitle">
                        Descarga de recibo de nómina.
                        </div>

                        <p>
                            <a href="https://sistemas.ujed.mx/PersonalUJED/">Portal del personal de la UJED</a>
                        </p>

                        <div className="subtitle">
                            Jubilaciones.
                        </div>

                        <p>
                            Pasos para jubilarse:
                        </p>
                        <br />

                        <ul>
                            <li>
                            Solicitar constancia de antigüedad en Recursos Humanos.
                            </li>
                            <li>
                            Entregar la constancia al Sindicato correspondiente para su valoración
                            </li>
                            <li>
                            Acudir cuando así se le indique, a Relaciones Laborales de la Universidad para firmar convenio.
                            </li>
                            <li>
                            Entregar en Relaciones Laborales copia de Estado de Cuenta para su depósito.
                            </li>
                            <li>
                            Acudir a prestaciones económicas de Recursos Humanos para tramitar baja del ISSSTE y la hoja única de servicio.
                            </li>
                        </ul>
                        <br />

                        <div className="subtitle">
                            Seguros de Vida 
                        </div>
                        <p>

                            Pasos para jubilarse: <br /> <br />

                            <ul>

                            <li>Solicitar constancia de antigüedad en Recursos Humanos. </li>
                            <li>Entregar la constancia al Sindicato correspondiente para su valoración </li>
                            <li>Acudir cuando así se le indique, a Relaciones Laborales de la Universidad para firmar convenio. </li>
                            <li>Entregar en Relaciones Laborales copia de Estado de Cuenta para su depósito. </li>
                            <li>Acudir a prestaciones económicas de Recursos Humanos para tramitar baja del ISSSTE y la hoja única de servicio. </li>

                            </ul>
                            <br />
                            Seguros de Vida <br /> <br />
                            ¿Qué es un siniestro?<br /> <br />
                            El Siniestro lo podemos definir como la manifestación del riesgo asegurado; es un acontecimiento que origina daños concretos que se encuentran garantizados en la póliza hasta determinada cuantía, obligando a la Aseguradora a restituir, total o parcialmente, al Asegurado o a sus beneficiarios, el capital garantizado en el contrato del seguro.
                            <br /><br />
                            ¿Qué hacer en caso de siniestro? <br /> <br />
                            Usted debe ponerse en contacto con su agente de seguros o con nuestro ejecutivo de siniestros al teléfono 4161-9550, en un horario de lunes a viernes de 9:00 a 14:00 y de 15:30 a 18:00 horas.
                            <br /> <br />
                            Deberá entregar a su agente y/o a la aseguradora los siguientes documentos, es caso de:
                            <br /> <br />
                            Fallecimiento <br /> <br />
                            Documentos del asegurado: <br /> <br />

                            <ul>
                             <li> Acta de Nacimiento original del Asegurado </li>
                             <li> Acta de Defunción original del Asegurado </li>
                             <li> Copia del Certificado Médico de Defunción expedida por la Secretaría de Salud </li>
                             <li> Copia de la Identificación Oficial del Asegurado (credencial de elector, pasaporte o cédula profesional) </li>
                             <li> Comprobante de domicilio del asegurado (no mayor a tres meses) </li>
                             <li> Formato de “Declaración de Fallecimiento APV” </li>
                             <li> Informe médico APV </li>
                             <li> Original Consentimiento Individual donde se hace la designación de Beneficiarios </li>
                            </ul>

                            <br />
                            En caso de muerte accidental: <br /> <br />

                            Copia certificada del acta de averiguación previa del Ministerio público levantada con motivo del accidente (deberá incluir resultado de necropsia, estudio toxicológico de alcoholemia)
                            <br /> <br />
                            Incapacidad: <br /> <br />
                            
                            <br />

                            <li> Dictamen de incapacidad total o permanente emitida por el ISSSTE O IMSS (si se trata de obras o guarderías), y que la fecha del siniestro será establecida en el dictamen médico, por lo que se deberá presentar el aviso de baja a fin de constatar que el asegurado hizo valer el evento ante el contratante. </li>
                            <li> Acta de nacimiento del asegurado </li>
                            <li> Identificación del asegurado </li>
                            <li> CURP del asegurado </li>
                            <li> Original o copia certificada del último talón de pago que compruebe la pertenencia de la colectividad </li>
                            <li> Comprobante de domicilio del asegurado </li>
                            <li> Historial clínico </li>

                            <br />
                            Una vez recibida la documentación solicitada de manera completa, la Aseguradora analizará la procedencia del siniestro y emitirá su dictamen en un plazo máximo de 7 días hábiles contados a partir de la recepción de la misma.
                            <br /> <br />
                            En caso de no proceder la indemnización o de observarse irregularidades o faltantes de documentación, al término del plazo anterior la compañía entregará una carta de improcedencia o la solicitud de aclaraciones o documentaciones complementarias.
                            <br /> <br />
                            De proceder la indemnización, la Aseguradora tendrá un plazo máximo de 5 días hábiles para hacer el pago de la misma a favor de los beneficiarios.
                            <br /> <br />
                            El/ los beneficiario (s) deberá (n) firmar, a la recepción del pago, el finiquito que presentará la Aseguradora.

                        </p>
                    </GenericSection>
                )

            case "Coordinación de personal académico":
                return(
                    <>
                    
                        <GenericSection title={"Coordinación de personal académico"}>
                            <div className="subtitle">
                                Objetivo
                            </div>

                            <p>
                                Revisa, valida y autoriza en base a la normativa vigente las plantillas del personal con el fin de mantener actualizada la situación laboral de los trabajadores de la UJED generando los movimientos nominales y la aplicación de los servicios que se presenten. Realizar acciones planeadas y organizadas con el fin de lograr que el SIIA contenga la información integral de los trabajadores de la institución.
                            </p>

                            <div className="subtitle">
                                Servicios
                            </div>

                            <ul>

                                <li>
                                Plantilla de plazas académicas, de confianza, determinadas y/o indeterminadas (generación de nuevas plazas y modificaciones).
                                </li>

                                <li>
                                Seguimiento a convocatorias para el concurso de plazas académicas.
                                </li>

                                <li>
                                Seguimiento a formas únicas (contratación) trámite.
                                </li>

                                <li>
                                Contratación de personal de tiempo completo, forma de contratación o mecanismo de ingreso.
                                </li>

                                <li>
                                Recepción y control de los documentos y solicitudes necesarios para el trámite de los movimientos y contrataciones académicas.
                                </li>

                                <li>
                                Contratación de personal de asignatura, forma de contratación o mecanismo de ingreso.
                                </li>

                                <li>
                                Atención y trámite a nombramientos que sean emitidos a favor del personal académico para ocupar un cargo académico-administrativo.
                                </li>

                                <li>
                                Promoción y/o asignación de nivel al personal académico y administrativo, atendiendo a lo que, para este efecto, dispone la normatividad.
                                </li>

                                <li>
                                Programación y seguimiento de los movimientos o incidencias del personal académico en la nómina quincenal.
                                </li>

                                <li>
                                Atención a solicitudes de constancias de trabajo que solicite el personal académico.
                                </li>

                                <li>
                                Revisión y actualización de plantillas del personal académico.
                                </li>

                                <li>
                                Seguimiento a los oficios emitidos por la comisión de ocupación de plazas académicas.
                                </li>



                            </ul>

                            <div className="subtitle">
                                Directorio
                            </div>

                            <p>
                            Laura Elizabeth González Ramírez. <br />
                            Extensión: 3906. <br />
 <br />
                            Laila Yaneira Ortega Gámiz. <br />
                            Extensión: 3906. <br />
 <br />
                            Ana Evelyn Gurrola Campos. <br />
                            Extensión: 3902. <br />
 <br />
                            Erika María Bernal Moreno. <br />
                            Extensión: 2067. <br />
 <br />
                            Leticia Guadalupe Velasco Blanco. <br />
                            Extensión: 2067. <br />
 <br />
                            Luz Elena Ronquillo Barraza. <br />
                            Extensión: 3908. <br />
<br />
                            Janeth Martínez Romero. <br />
                            Extensión: 3908. <br />
                            </p>
                        </GenericSection>
                    
                    </>
                )
    
            case "Coordinación de personal administrativo":
                return(
                    <>
                    
                        <GenericSection title={"Coordinación de personal administrativo"}>
                            <div className="subtitle">
                                Objetivo
                            </div>

                            <p>
                                Revisa, valida y autoriza en base a la normativa vigente las plantillas del personal con el fin de mantener actualizada la situación laboral de los trabajadores de la UJED generando los movimientos nominales y la aplicación de los servicios que se presenten. Realizar acciones planeadas y organizadas con el fin de lograr que el SIIA contenga la información integral de los trabajadores de la institución.
                            </p>

                            <div className="subtitle">
                                Servicios
                            </div>

                            <ul>
                                <li>
                                Plantilla de personal administrativo y de confianza en el SIIA.
                                </li>
                                <li>
                                Contrataciones y movimientos del personal administrativo propuestos por el STEUJED.
                                </li>
                                <li>
                                Movimientos nominales pertinentes a la situación laboral del personal de la Universidad.
                                </li>
                                <li>
                                Nombramientos del personal.
                                </li>
                                <li>
                                Constancias de Servicio a solicitud del trabajador
                                </li>
                            </ul>

                            <div className="subtitle">
                                Directorio
                            </div>

                            <p>
                            Coordinadora: Narda Gabriela Soto Núñez. <br />
                            Extensión: 3907 
                            </p>
                        </GenericSection>
                    
                    </>
                )

            case "Prestaciones económicas":
                return(
                    <>
                    
                        <GenericSection title={"Prestaciones económicas"}>
                            <div className="subtitle">
                                Objetivo
                            </div>
                            <p>
                            Controlar y actualizar la información de los trabajadores de la UJED en lo referente a las afiliaciones al ISSSTE, así mismo realiza los trámites correspondientes para la aplicación de las prestaciones económicas que el ISSSTE otorga a sus afiliados. Realizando las acciones planeadas y organizadas con el fin de lograr que el SIIA contenga la información integral del personal de la UJED.
                            </p>

                            <div className="subtitle">
                                Servicios
                            </div>

                            <ul>
                                <li>
                                Pago de cuotas, aportaciones y préstamos, estancias infantiles, créditos INFONACOT.
                                </li>
                                <li>
                                Trámite altas, modificaciones y bajas ante el ISSSTE.
                                </li>
                                <li>
                                Revisión de solicitudes de préstamos ISSSTE y créditos INFONACOT así como control de descuentos.
                                </li>
                                <li>
                                Elaboración de hojas de servicio y constancias diversas para realizar trámites ante el ISSSTE y FOVISSSTE.
                                </li>

                            </ul>

                            <br />

                            <h2>
                            Información
                            </h2>

                            <div className="subtitle">
                            Irregularidades en datos
                            </div>

                            <p>
                            En caso de detectar alguna irregularidad en tu R.F.C., C.U.R.P. y nombre ante el ISSSTE, es necesario que tramite la corrección de los mismos acudiendo al departamento de Prestaciones Económicas con la siguiente documentación en copia simple:
                            </p>
                            <br />

                            <ul>
                                <li>
                                RFC del SAT.
                                </li>
                                <li>
                                CURP (formato nuevo).
                                </li>
                                <li>
                                Acta de nacimiento (formato nuevo).
                                </li>
                                <li>
                                Estado de cuenta del SAR.
                                </li>
                                <li>
                                Último talón de pago.
                                </li>
                                <li>
                                Credencial de elector vigente.
                                </li>
                            </ul>

                            <br />


                        </GenericSection>
                    
                    </>
                )

            case "Generalidades":
                return(
                    <>
                    
                        <GenericSection title={"Generalidades"}>
                            <h2>Subdirección</h2>

                            <div className="subtitle">
                                Objetivo
                            </div>

                            <p>
                            Coordinar y llevar a cabo las acciones determinadas por la Dirección de Desarrollo y Gestión de Recursos Humanos de la UJED con la finalidad de mantener actualizados en el SIIA los movimientos de personal, en base a la normatividad vigente, para contar con información actualizada que sirva de base para la toma de decisiones e historial de los trabajadores de la UJED
                            </p>

                            <div className="subtitle">
                                Servicios
                            </div>

                            <ul>
                                <li>
                                Control y seguimiento de plazas académicas.
                                </li>
                                <li>
                                Control y seguimiento de contrataciones de personal académico.
                                </li>
                                <li>
                                Control y seguimiento de movimientos derivados de la relación laboral (promociones, programaciones, correcciones de pagos, ajustes, retroactivos, licencias, nombramientos, etc.)
                                </li>
                                <li>
                                Orientación y asesoría asociada con la relación laboral del personal académico.
                                </li>
                            </ul>

                            <div className="subtitle">
                            Áreas operativas
                            </div>

                            <ul>
                                <li>
                                Contrataciones y Movimientos de Personal Académico.
                                </li>
                                <li>
                                Programación Académica.
                                </li>
                                <li>
                                Programa de Supervisión.
                                </li>
                                <li>
                                Apoyo, respuesta y seguimiento de trámites legales.
                                </li>
                            </ul>
                        </GenericSection>
                        

                        <GenericSection title={"Digitalización y archivo"}>

                            <div className="subtitle">
                            Servicios
                            </div>

                            <p>
                            Organizar, controlar, actualizar y conservar la documentación que conforma el expediente del trabajador universitario automatizando y digitalizando los documentos con el fin de recuperar y facilitar la consulta del historial de la información personal y laboral del trabajador en la institución con el uso de la nueva tecnología.
                            </p>
                        </GenericSection>
                    </>
                )
                
            default:
                break;
        }
    }

    return(
        <>
        
            <MainNav/>

            

            <GenericBanner img={BannerImg}>
                Dirección de Desarrollo y Gestión de Recursos Humanos   
            </GenericBanner>

            <PageSwitch lista={stateList} passValue={setCurState}/>

            {States()}

            <Footer/>
        </>
    )
}

export default RecursosHumanos;