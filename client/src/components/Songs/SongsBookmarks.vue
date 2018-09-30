<template>
  <panel title="Bookmarks">
    <v-data-table
      class="text-xs-right"
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          {{ props.item.title }}
        </td>
        <td class="text-xs-right">
          {{ props.item.artist }}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title',
          align: 'right'
        },
        {
          text: 'Artist',
          value: 'artist',
          align: 'right'
        }
      ],
      pagination: {
        sortBy: 'date',
        descending: true
      },
      bookmarks: [
        {
          title: 'hello world',
          artist: 'testing'
        },
        {
          title: 'greetings universe',
          artist: 'checking'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
