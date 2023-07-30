
import {page} from "./lib.js"



page('/', () => console.log('home'))
page('/fit-calc', () => console.log('calc'))

page.start()