
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

 import VueRouter from 'vue-router';
 import HeaderComponent from "./components/HeaderComponent.vue";
 import TaskListComponent from "./components/TaskListComponent";
 import TaskShowComponent from "./components/TaskShowComponent";
 import TaskCreateComponent from "./components/TaskCreateComponent";

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 Vue.component('header-component', HeaderComponent);
 Vue.component('example-component', require('./components/ExampleComponent.vue'));

  Vue.use(VueRouter);
 
 const router = new VueRouter({
     mode: 'history',
     routes: [
         {
             path: '/tasks',
             name: 'task.list',
             component: TaskListComponent
         },
         {
            path: '/tasks/create',
            name: 'task.create',
            component: TaskCreateComponent
         },
         {
             path: '/tasks/:taskId',
             name: 'task.show',
             component: TaskShowComponent,
             props: true
         },
     ]
 });

const app = new Vue({
    el: '#app',
    router
});
