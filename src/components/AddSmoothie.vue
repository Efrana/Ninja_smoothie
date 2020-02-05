<template>
  <div class="add-smoothie container">
    <h2 class="center-align pink-text">Add New Recipe</h2>
    <form @submit.prevent="AddSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="title" />
      </div>
         

      <div v-for="(ing, index) in ingredients" :key="index" class="field">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="ingredients[index]" />
        <i class ="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>

      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient:</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another" />
      </div>
       <div class="field title">
        <label for="details">Details</label>
        <input type="text" name="details" v-model="details" />
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add</button>
      </div>
    </form>
  </div>
</template>
<script>
import db from "@/firebase/init";
import slugify from "slugify";
export default {
  name: "AddSmoothie",
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null,
      slug: null,
      details:null
    };
  },
  methods: {
     AddSmoothie () {
      // console.log(this.title, this.another, this.ingredients, this.feedback)
      if (this.title) {
        this.feedback = null
        // create a slug
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })// slugify
        db.collection('smoothies').add({
          title: this.title,
          ingredients: this.ingredients,
          slug: this.slug,
          details:this.details
        }).then(() => { this.$router.push({ name: 'HelloWorld' }) }).catch(err => {
          console.log(err)
        })// catch
      // eslint-disable-next-line brace-style
      }// if
      else {
        this.feedback = 'You must enter a value to add an ingredient'
      }// else
    }, // AddSmoothie
    addIng () {
      if (this.another) {
        // console.log('CHECK: ', this.ingredients[0]);
        this.ingredients.push(this.another)
        console.log(this.ingredients)
        this.another = null
        this.feedback = null
      // eslint-disable-next-line brace-style
      }// if
      else {
        this.feedback = 'You must enter a value to add an ingredient'
      }// else
    },
     deleteIng (ing) {
      this.ingredients = this.ingredients.filter(ingredient => {
        return ingredient !== ing //return true or false/false:remove the value
      })// filter
    }// deleteIng
  }
};
</script>
<style>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2 {
  margin: 20px auto;
}
.add-smoothie .field {
  margin: 20px auto;
  position: relative;
}
   .edit-smoothie .delete{
        position: absolute;
        right: 0;
        bottom: 16px;
        color: #aaa ;
        font-size: 1.4em;
        cursor: pointer;
    }
</style>