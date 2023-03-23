<script lang='ts'>
    import { base } from '$app/paths'
    import '../css/styles.css'
</script>

    <nav>
        <h1><p>NIKITANIAKHAI</p></h1>
        <br>
        <a  class="internal_links"   target="_self" href='{base}/about' >About</a>
        <a  class="internal_links"   target="_self" href='{base}/contact' >Contact</a>
        <a  class="internal_links"   target="_self" href='{base}/diary' >Diary</a>
        <a  class="internal_links"   target="_self" href='{base}/' >Works</a>
        <br>
    </nav>

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
