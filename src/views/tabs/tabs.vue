<template>
  <div class="card mb-10">
    <!--begin::Card-->
    <div class="card">
      <div class="card-body p-5 row">
        <div class="col-12">
          <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6">
            <!-- LINK Tab 1 -->
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1"
                >Vyber produktov a sluzieb</a
              >
            </li>
            <!-- LINK Tab 2 -->
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2"
                >zoznam vybranych produktov
              </a>
            </li>
            <!-- LINK Tab 3 -->
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_3"
                >zoznam vymazanych produktov
              </a>
            </li>
          </ul>

          <div class="tab-content" id="myTabContent">
            <!-- Tab 1 -->
            <div
              class="tab-pane fade show active"
              id="kt_tab_pane_1"
              role="tabpanel"
            >
              <TabsB />
            </div>
            <!-- Tab 2 -->
            <div class="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
              <!-- <TabsA /> -->
              <h2>hello</h2>
              <!-- <TabsB /> -->
            </div>
            <!-- Tab 3 -->
            <div class="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
              <!-- <ListDeletedProducts /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import axios from "axios";
import TabsA from './tabsViews/tabsA.vue'
import TabsB from './tabsViews/tabsB.vue'

export default {
   components: {
    TabsA,
    TabsB
  },
  data() {
    return {
      name: "",
      name: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>

</style>></style>
