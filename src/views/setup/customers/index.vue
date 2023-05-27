<template>
  <div style="padding: 30px;">
    <h5>{{ selectedOption }}</h5>
    <el-form :inline="true" label-position="top" :model="formInline" >
      <el-form-item label="المحطة" style="margin-right: 20px !important;">
      <el-select v-model="selectedOption" size="small" clearable filterable placeholder="Select">
            <el-option v-for="item in sportsData" :key="item.Id" :label="item.Game" :value="item">
            </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="التاريخ">
      <el-date-picker
            v-model="selectedDateRange"
            type="daterange"
            size="small"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
      </el-date-picker>
    </el-form-item>
    </el-form>
    <div class="block">
      <el-row :gutter="4">
        <el-col :span="4"><label>Date</label></el-col>
        <el-col :span="8">
          <el-select v-model="selectedOption" size="small" clearable filterable placeholder="Select">
            <el-option v-for="item in sportsData" :key="item.Id" :label="item.Game" :value="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-date-picker
            v-model="selectedDateRange"
            type="daterange"
            size="small"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
        </el-col>
        <el-col></el-col>
      </el-row>
    </div>
    <!-- help: https://ej2.syncfusion.com/angular/documentation/grid/filtering/ -->
    <ejs-grid ref='grid' :dataSource='data' :filterSettings='filterOptions' :allowFiltering='true' height='267px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=60></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=60></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=60></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<style scoped>
.select-wrap {
  padding: 0 0 10px 0;
  font-family: Roboto;
  padding: 1em;
}

.select-wrap select {
  height: 28px;
  width: 100%;
  border-width: 0 0 2px 0;
  background: transparent;
}

.select-wrap select:focus {
  border-bottom-style: solid;
  border-color: #ff4081;
}

.select-wrap select,
.select-wrap select option {
  outline: none;
  font-size: 14px;
  padding: .2em;
  height: 30px;
}

@media (min-width: 480px) and (max-width:639px) {
  .select-wrap {
    width: 40%
  }
}

@media (min-width:640px) {
  .select-wrap {
    width: 25%
  }
}

/* @import "../../styles/Grid/filtering.css"; */
</style>
<script>
import Vue from 'vue';

import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { MultiSelect, CheckBoxSelection, DropDownListPlugin, DropDownListComponent } from "@syncfusion/ej2-dropdowns";
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Filter } from '@syncfusion/ej2-vue-grids';
MultiSelect.Inject(CheckBoxSelection);

Vue.use(MultiSelectPlugin);

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
  },
  data() {
    return {
      data: [
        { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
        { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
        { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
        { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34 },
        { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3 },
        { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17 },
        { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98 },
        { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33 },
        { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97 }
      ],
      selectedDateRange:'',
      selectedOption: '',
      sportsData: [
        { Id: 'game1', Game: 'Badminton' },
        { Id: 'game2', Game: 'Football' },
        { Id: 'game3', Game: 'Tennis' }
      ],
      fields: { text: 'Game', value: 'Id' },
      pageSettings: { pageSize: 5 },
      filterOptions: {
        showFilterBarOperator: true
      },
      filter: {
        type: 'CheckBox'
      }
    };
  },
  mounted() {
    //this.$refs.grid.filterSettings.showFilterBarOperator = true;
    console.log("Mounted")
    console.log(this.$refs.grid)
  },
  provide: {
    grid: [Page, Sort, Filter]
  }
}
</script>
