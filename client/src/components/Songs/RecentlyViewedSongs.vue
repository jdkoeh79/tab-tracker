<template>
  <panel title="Recently Viewed Songs">
    <v-data-table
      class="text-xs-right"
      :headers="headers"
      :pagination.sync="pagination"
      :items="historyEntries">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          {{ props.item.viewCount }}
        </td>
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
import { mapState } from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Views',
          value: 'viewCount',
          align: 'left'
        },
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
        sortBy: 'updatedAt',
        descending: true
      },
      historyEntries: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.historyEntries = (await SongHistoryService.index({
        userId: this.user.id
      })).data
    }
  }
}
</script>

<style scoped>
</style>
