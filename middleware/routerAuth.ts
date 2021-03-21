import { Context } from '@nuxt/types'
import {Route} from 'vue-router'

export default function({store, redirect, route}:Context): void {
    store.state.user != null && route.name == 'login' ? redirect('/') : ''
    store.state.user == null && isProtectedRoute(route) ? redirect('/login') : ''
}

function isProtectedRoute(route:Route) {
    if(route.matched.some(record => record.name == 'index')) return true
}