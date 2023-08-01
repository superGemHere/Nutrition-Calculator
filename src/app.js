
import {page} from "./lib.js"



page('/', () => console.log('home'))
page('/catalog', () => console.log('calc'))

page.start()