<template>
  <div>
    <h1>This is an Jobs page</h1>
    <p>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
      making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and
      a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, 
      sometimes on purpose (injected humour and the like).
    </p>
    <ul class="jobs">
        <li v-for="job in jobs" :key="job.id">
            {{job.position}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jobs:[
                {
                    id:'1',position : 'web designer', job_details : 'create web design ',
                },
                {
                    id:'2',position : 'web developer', job_details : 'code web design to real site ',
                },
                {
                    id:'3',position : 'manager', job_details : 'manage all the team',
                },
            ]
        }
    }
}
</script>

<style scoped>
    .jobs li{
        list-style-type: none;
    }
</style>