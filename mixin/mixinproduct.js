
export default {
    data(){
        return{
            products:[]
        }
    },
    created(){
        this.products=this.loadProduct();
    },
    methods:{
        loadProduct(){
             return[
            'product 1',
            'product 2',
            'product 3',
        ]
        }
    }
}   