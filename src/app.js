
import {page} from "./lib.js"
import { showCatalog } from "./views/calcView.js"



page('/', () => console.log('home'))
page('/catalog', showCatalog)

page.start()