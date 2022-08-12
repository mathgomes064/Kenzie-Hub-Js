import { AnimatePresence } from 'framer-motion'
import { Route, Switch} from 'react-router-dom'
import Cadastro from '../pages/Cadastro';
import React from 'react';
import Login from '../pages/Login';
import Modal from '../pages/Modal';
import Home from '../pages/Home';

export default function Router(){

    return(
        <AnimatePresence>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/cadastro" component={Cadastro}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/modal" component={Modal}></Route>
            </Switch>
        </AnimatePresence>
    )
}