import Index from '../views/Index.vue'
import Room from "../views/Room.vue"
const routes = [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: "/room",
      name: "Room",
      component: Room
    }
  ]

  export default routes;