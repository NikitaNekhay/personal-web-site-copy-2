<script lang="ts">
    import { base } from '$app/paths'
    export let innerWidth;
    let ttextFilling:string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis,  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dol Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis,  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dol Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium remLorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis,  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dol Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit sapiente animi iste possimus provident nostrum adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem obcaecati rerum nobis minima culpa quia ab corporis, libero deserunt dolore dolorem suscipit ";
    let textFilling:string = "";
    let bgSize = `20%`;

    if (innerWidth < 470) {
    textFilling = ttextFilling.slice(0, 1500);

} else if (innerWidth < 530) {
    textFilling = ttextFilling.slice(0, 2000);

} else if (innerWidth < 810) {
    textFilling = ttextFilling.slice(0, 3500);

} else {
    textFilling = ttextFilling;

}


</script>

<p class="text-image text-ellipsis" style=" background-image: url({base}/media/NIKITA.JPG);">
    {textFilling}
</p>




<style>
    .text-image{
       
        background-size:cover;
        position: relative;
        width:  100%;
        height:  100%;
        background-size: 50%;
        background-repeat: no-repeat;
        @apply bg-left-top;
        background-attachment: fixed;
        -webkit-background-clip: text;
        color: transparent;
        line-height: 2px;
        
}
@media (min-width: 1200px) {
        .text-image {
            background-size: 30%;
        }
    }
</style>