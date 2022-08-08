import React from 'react';
import { Route, Switch} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Modal from '../pages/Modal';
import { useState } from 'react';

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