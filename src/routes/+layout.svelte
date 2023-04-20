<script lang='ts'>
    import { base } from '$app/paths'
    import '../css/styles.css'
</script>

    <div class="container"> 
        <div class="grid-item-navigation">
            
            <div class="grid-item-column">
                <div class="grid-item-header">
                    <h1><p>NIKITANIAKHAI</p></h1>
                </div>
                <div class="grid-item-header">   
                    <nav>
                        <br>
                        <a  class="internal_links"   target="_self" href='{base}/about' >About</a>
                        <a  class="internal_links"   target="_self" href='{base}/contact' >Contact</a>
                        <a  class="internal_links"   target="_self" href='{base}/diary' >Diary</a>
                        <a  class="internal_links"   target="_self" href='{base}/' >Works</a>
                        <br>
                    </nav>
                </div>
            </div>
    
            <div class="grid-item-column">
               
                <div class="grid-item-header">
                   <h1><p>123 </p></h1>
                </div>
                <div class="grid-item-header">
                    <a class="button-login" target="_self" href='{base}/login' >Login</a>
                </div>
            </div>

        </div>
       
    </div>
   

    <slot />

    <footer>
        Dream big, work hard            
    </footer>

    <style>
        footer{
            padding-top: 200px; 
            padding-left: 850px; 
            width: 600px; 
            height: 800px; 
            display: flex; 
        }

    </style>
