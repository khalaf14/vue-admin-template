<template>
  <div>
    <!-- help: https://ej2.syncfusion.com/angular/documentation/grid/filtering/ -->
    <vue-element-loading :active="loading" spinner="spinner" />
    <ejs-grid ref="grid" :dataSource='dataSource'
              :toolbarClick='toolbarClick' :editSettings='editSettings'
              :enableHover=true clipMode="EllipsisWithTooltip"
              :heckboxOnly="CheckBoxSelection" @rowSelected="handleRowSelection" @rowDeselected="handleRowDeselection"
              :toolbar="toolbarOptions" :allowExcelExport="true"
              :allowResizing='true' :allowReordering="true" :allowPaging="true" :pageSettings='pageSettings'
              :filterSettings='filterOptions' :allowFiltering='allowFiltering'
              >
      <e-columns>
        <e-column type='checkbox' width='50' v-if="CheckBoxSelection"></e-column>
        <e-column v-for="colItem in columns" :allowFiltering='colItem.allowFiltering' :allowEditing='!colItem.disabled' filterOperator="contains" :field='colItem.field' :headerText='colItem.headerText' width="140px" :autoFit="true" :visible='true'></e-column>
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
import VueElementLoading from "vue-element-loading";
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { MultiSelect, CheckBoxSelection } from "@syncfusion/ej2-dropdowns";
import { CheckBoxPlugin, ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { GridPlugin, GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Filter, Reorder, Resize, Toolbar, ExcelExport, Edit } from '@syncfusion/ej2-vue-grids';
Vue.use(MultiSelectPlugin, CheckBoxPlugin, ButtonPlugin);
Vue.use(GridPlugin);
MultiSelect.Inject(CheckBoxSelection);



export default {
  name: 'DataGridComponent',
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    VueElementLoading
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    editSettings: {
      type: Object,
      default: () => {}
    },
    loading:{
      type: Boolean,
      default: false
    },
    allowFiltering:{
      type: Boolean,
      default: false
    },
    CheckBoxSelection:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: [],
      gridRef: null,
      toolbarOptions: ["ExcelExport"],
      formquery: {},
      selectedDateRange: '',
      selectedStation: '',
      sportsData: [
        { Id: 'game1', Game: 'Badminton' },
        { Id: 'game2', Game: 'Football' },
        { Id: 'game3', Game: 'Tennis' }
      ],
      pageSettings: {pageSizes: true,pageSize: 8 },
      filterOptions: {
        ignoreAccent: true,
       // showFilterBarOperator: true
      },
    };
  },
  methods:{
    //emits
    handleRowSelection() {
      const selectedRows = this.$refs.grid.getSelectedRecords();
      this.$emit('row-selection-change', selectedRows);
    },
    handleRowDeselection() {
      const selectedRows = this.$refs.grid.getSelectedRecords();
      this.$emit('row-selection-change', selectedRows);
    },
    //emits
    setLoading(){
      console.log("setLoading");
      this.$refs.gridRef.showSpinner();
      console.log(this.props)
    },
    toolbarClick: function (args) {
      console.log(this.$refs.grid);
      debugger
        switch (args.item.text) {
            case 'PDF Export':
                (this.$refs.grid).pdfExport();
                break;
            case 'Excel Export':
                (this.$refs.grid).excelExport();
                break;
            case 'CSV Export':
                (this.$refs.grid).csvExport();
                break;
        }
  },
  mounted() {
    //this.$refs.grid.filterSettings.showFilterBarOperator = true;
    console.log("child Mounted")
    console.log(props.CheckBoxSelection)
  },
},
  provide: {
    grid: [Sort, Page, Filter, Reorder, Resize, Toolbar, ExcelExport, Edit]
  }
}
</script>
