<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link
          to="{ name: 'transaction.create' }"
          class="btn btn-primary btn-sm rounded shadow mb-3"
        >
          Add
        </router-link>
        <div class="card rounded shadow">
          <div class="card-header">Transaction List</div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>title</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Income</td>
                  <td>5000000</td>
                  <td>Revenue</td>
                  <td>
                    <div class="btn-group">
                      <router-link
                        to="{ name: 'transaction.edit', params: { id:1 } }"
                        class="btn btn-sm btn-outline-info"
                        >Edit</router-link
                      >
                      <button class="btn btn-sm btn-outline-danger">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    let transaction = ref([]);

    onMounted(() => {
      // get data from endpoint
    });
  },
};
</script>
