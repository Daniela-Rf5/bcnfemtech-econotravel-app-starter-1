import * as React from "react";
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./about";
import {ExperiencePanel} from "./ExperiencePanel";
import {FormularioReserva} from "./Reservas";
import {FinalReserva} from "./FinalReserva";


export class App extends React.Component {
    render() {
        const experiences = [
            {
                id: 1,
                name: 'Paseo en bicicleta por el Montseny',
                description: 'Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares. El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar. Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas. Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera con butifarra blanca y negra y munxetes del Montseny.',
                pricePerPerson: 250
            },

            {
                id: 2,
                name: 'Descubre la costa en barco de vela',
                description: 'Disfruta de un hermoso paseo acuático en barco de vela por la increíble costa de Barcelona. Una escapada veraniega apta incluso para los días más calurosos del año. Descubre los encantadores alrededores de la ciudad de Barcelona y visita desde el mar sus más impresionantes playas y calas. Comenzaremos la excursión en el Puerto de Barcelona, desde donde partiremos hacia el norte para visitar playas como la Mar Bella, la Playa de la Mora y la Playa de los Pescadores. A bordo de la embarcación podremos disfrutar de una selección de quesos y embutidos catalanes acompañada de cava brut y zumos de frutas. Asimismo, pararemos cerca de la Playa de Montgat para realizar una actividad de buceo de superficie que nos permitirá apreciar la diversidad de la fauna marítima local y su ecosistema. Finalizaremos la excursión en el mismo puerto del que partimos.',
                pricePerPerson: 280
            },
            {
                id: 3,
                name: 'Descubre la Barcelona Modernista de noche',
                description: 'Desplazarse a pie es una de las mejores formas de descubrir las maravillas modernistas que se esconden en el barcelonés distrito del Eixample, ubicado en el centro de la ciudad. En esta excursión de cuatro horas, descubriremos los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí. El tour incluye visita guiada al interior de la Casa Batlló y la Sagrada Familia, así como parada para cenar en el restaurante típico catalán Can Masiá, donde disfrutaremos de las mejores carnes de la región acompañadas de vinos de las tierras del Baix Empordá. El restaurante también ofrece opciones vegetarianas y veganas así como menú para niños. Cava aparte.',
                pricePerPerson: 200
            },

            {
                id: 4,
                name: 'Del huerto a la mesa',
                description: 'Comparte con los más pequeños las maravillas de la naturaleza. En esta excursión breve de tres horas, podréis plantar vuestras propias hortalizas y verduras en el huerto de Can Gilabert, ubicado en el corazón del Montbaig. Durante una hora y media, aprenderéis a cuidar de vuestro propio huerto, plantaréis y abonaréis vuestras propias plantas, y también recogeréis parte de los ingredientes que los expertos chefs de Can Gilabert utilizarán para preparar la posterior cena, donde disfrutaréis de la experiencia de consumir productos recién recogidos de la tierra con vuestras propias manos. Actividad ideal para familiarizar a los más pequeños de la familia con el estilo de vida rural y la agricultura sostenible. Asimismo, obtendréis como obsequio una botella de aceite virgen extra cultivado y preparado en Can Gilabert, obra de la familia Gilabert, que lleva más de 80 años cultivando olivos.',
                pricePerPerson: 145
            },

        ];


        return <Router>
            <NavigationBar/>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/ExperiencePanel">
                    <ExperiencePanel experiences={experiences}/>
                </Route>
                <Route path={"/Reservas"}>
                    <Reservas reservas={reservas}/>
                </Route>
            </Switch>
        </Router>
    }
}