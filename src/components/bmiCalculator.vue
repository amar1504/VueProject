<template>
   <div class="card " style="width: 25rem; margin-left:25rem;">
        <div class="card-body">
            <h5 class="card-title" >BMI Calculator</h5><hr/>
                <div class="form-group text-left text-muted">
                    <label for="exampleInputEmail1">Enter Weight</label>
                    <input type="text" class="form-control" v-model="height" aria-describedby="emailHelp" placeholder="Enter Height in cm">
                </div>
                <div class="form-group text-left text-muted">
                    <label for="exampleInputEmail1">Enter Height </label>
                    <input type="text" class="form-control" v-model="weight" aria-describedby="emailHelp" placeholder="Enter Weight in cm">
                </div>
                <div class="form-group text-center">
                    <button type="submit" class="btn btn-block btn-success" @click="Calculate();" >Calculate BMI</button>
                </div>
                <div class="mt-5">
                    <VueSpeedometer needleColor="black" needleTransitionDuration="1000" :value="+bmi" :segments="4" style="height: 210px;"   :customSegmentStops="[0,25,50, 75, 100]" :segmentColors='["firebrick","tomato", "gold", "limegreen"]'  :maxValue="100" />
                    <p v-if="bmi > 0">{{ msg }}</p>
                </div>
               
        </div>
    </div>
</template>
<script>
import VueSpeedometer from "vue-speedometer";

export default {
    components: { 
        VueSpeedometer 
    }, 
    template: `<vue-speedometer maxSegmentLabels="12"
        />`,
    data(){
        return{
            weight:'',
            height:'',
            bmi:null,
            msg:''
        }
    },
    methods:{
        Calculate(){
            var w = parseInt(this.weight);
            var h = parseInt(this.height)/100;
            this.bmi = w / (h * h);
            if(this.bmi >=100){
                this.bmi=100;
            }else if(this.bmi <0){
                this.bmi=0;
            }
            // alert(w+' '+h+' '+bmi);
            if(this.bmi <= 18.5) {
                this.msg="You are too thin. \n\nLow: " + this.bmi.toFixed(2) + 'kg/m2';
                this.$alert(this.msg);
                // alert(this.msg);
             }
             else if (this.bmi >18.5 && this.bmi <=25 ) {
                this.msg="You are healthy. \n\nModerate:" + this.bmi.toFixed(2) + 'kg/m2';
                this.$alert(this.msg);
                // alert(this.msg );
            }
            else if (this.bmi >=25 ) {
                this.msg="You have overweight. \n\nHigh: " + this.bmi.toFixed(2) + 'kg/m2';
                this.$alert(this.msg);
                // alert(this.msg);
            }
            // alert(this.bmi);
        }
    }
}
</script>