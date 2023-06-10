<template>
  <div style="padding: 4px;">
    <el-card :body-style="{ padding: '6px' }">
      <el-row>
        <el-col span="2">
          <el-button type="success" size="small" icon="el-icon-check" @click="onSubmit">حفظ</el-button>
        </el-col>
        <el-col span="2">
          <router-link to="/sales/payment-methodes/credit-cards">
            <el-button type="danger" size="small" icon="el-icon-close">الغاء</el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-card>
    <el-card :body-style="{ padding: '4px' }">
    <el-form :inline="true" label-position="right" :model="formquery" >
      <el-form-item label="المحطة" >
        <el-select v-model="formquery.selectedStation" :disabled="true" size="small">
          <el-option :key="selectedStation.Id" :label="selectedStation.DSC" :value="selectedStation.Id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="التاريخ">
        <el-date-picker v-model="formquery.selectedDate" type="date" value-format="yyyy-MM-dd" size="small"
          placeholder="التاريخ">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-search" @click="Query">Query</el-button>
        <!-- <el-button type="danger" icon="el-icon-circle-close" circle ></el-button> -->
      </el-form-item>
    </el-form>

    <data-grid-component :allowFiltering="true" :loading="isLoading" :editSettings='editSettings' :columns="gridColumns"
      :dataSource="gridData" :CheckBoxSelection="false">
    </data-grid-component>
  </el-card>
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
import DataGridComponent from '@/components/DataGridComponent';

export default {
  components: {
    DataGridComponent
  },
  data() {
    return {
      formquery: {

      },
      gridData: [],// Populate the data for the grid
      gridColumns: [
        { field: 'itemNo', headerText: 'رقم المادة', isPrimaryKey:true, disabled: true, allowFiltering: true },
        { field: 'pumpNo', headerText: 'رقم المضخة', isPrimaryKey:true, disabled: true, allowFiltering: true },
        { field: 'startReading', headerText: 'عداد بداية', disabled: true, allowFiltering: false },
        { field: 'endReading', headerText: 'عداد نهاية', disabled: false, allowFiltering: false },
        { field: 'callibrReturnLt', headerText: 'مرتجع/معايرة(لتر)', disabled: false, allowFiltering: false },
        { field: 'callibrReturnAmount', headerText: 'مرتجع/معايرة(دينار)', disabled: true, allowFiltering: false },
        { field: 'totalSalesLt', headerText: 'إجمالي المبيعات (لتر)', disabled: true, allowFiltering: false },
        { field: 'unitPrice', headerText: 'سعر الوحدة', disabled: true, allowFiltering: false },
        { field: 'totalAmount', headerText: 'المبلغ الإجمالي', disabled: true, allowFiltering: false },
        { field: 'remark', headerText: 'ملاحظة', disabled: false, allowFiltering: false },],
      stationsList: [
        { Id: 20101, DSC: "ام الحيران" },
        { Id: 20102, DSC: "المصدار" },
        { Id: 20103, DSC: "الهاشمية" },
      ],
      selectedStation: '',
      editSettings: {
        allowEditing: true,
        mode: 'Batch',
        showConfirmDialog: false
      },
      isLoading: false,
    };
  },
  methods: {

    onSubmit() {
      console.log(this.formquery);
      this.isLoading = true;
      console.log(this.isLoading);
    },

    Query() {
      this.isLoading = true;
      console.log(this.gridData)
      // debugger
      setTimeout(() => {
        this.isLoading = false;
        this.gridData = [
          {
            "pumpNo": "P01",
            "transDate": "2023-03-04T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 3,
            "callibrReturnLt": null,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:46:34.15",
            "dateUpdated": null,
            "userCreated": "80016762",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P01",
            "transDate": "2023-03-05T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 3,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:46:58.397",
            "dateUpdated": null,
            "userCreated": "80016762",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P01",
            "transDate": "2023-03-06T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 10,
            "callibrReturnLt": 10,
            "callibrReturnAmount": 10,
            "totalSalesLt": 15,
            "unitPrice": 0.75,
            "totalAmount": 11.25,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:43:09.083",
            "dateUpdated": null,
            "userCreated": "80016762",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P01",
            "transDate": "2023-05-02T00:00:00",
            "stationId": 20102,
            "itemNo": "10401",
            "shiftNo": 1,
            "startReading": 13000,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 600,
            "unitPrice": 0.775,
            "totalAmount": 465,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-05-02T23:15:18.19",
            "dateUpdated": null,
            "userCreated": "80016762",
            "userUpdated": null,
            "cat3": null,
            "endReading": 13600,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P02",
            "transDate": "2023-03-05T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 3,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:47:01.923",
            "dateUpdated": null,
            "userCreated": "80016762",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P02",
            "transDate": "2023-03-06T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 10,
            "callibrReturnLt": 10,
            "callibrReturnAmount": 10,
            "totalSalesLt": 15,
            "unitPrice": 0.75,
            "totalAmount": 11.25,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:43:02.907",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P02",
            "transDate": "2023-03-04T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 2,
            "startReading": 3,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:46:38.307",
            "dateUpdated": null,
            "userCreated": "80016762",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P03",
            "transDate": "2023-03-04T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 3,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:46:41.273",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P03",
            "transDate": "2023-03-05T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 3,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:47:07.817",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P03",
            "transDate": "2023-03-06T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 10,
            "callibrReturnLt": 10,
            "callibrReturnAmount": 10,
            "totalSalesLt": 15,
            "unitPrice": 0.75,
            "totalAmount": 11.25,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:42:56.79",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P04",
            "transDate": "2023-03-04T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 3,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:46:43.9",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P04",
            "transDate": "2023-03-05T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 3,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:47:15.493",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P04",
            "transDate": "2023-03-06T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 10,
            "callibrReturnLt": 10,
            "callibrReturnAmount": 10,
            "totalSalesLt": 15,
            "unitPrice": 0.75,
            "totalAmount": 11.25,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:42:48.927",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P05",
            "transDate": "2023-03-04T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 3,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:46:47.49",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P05",
            "transDate": "2023-03-05T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 3,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:47:12.127",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P05",
            "transDate": "2023-03-06T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 10,
            "callibrReturnLt": 10,
            "callibrReturnAmount": 10,
            "totalSalesLt": 15,
            "unitPrice": 0.75,
            "totalAmount": 11.25,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:42:21.11",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P06",
            "transDate": "2023-03-04T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 2,
            "startReading": 3,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:46:50.6",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P06",
            "transDate": "2023-03-05T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 2,
            "startReading": 3,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:47:19.477",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P07",
            "transDate": "2023-03-04T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 1,
            "startReading": 3,
            "callibrReturnLt": 0,
            "callibrReturnAmount": 0,
            "totalSalesLt": 5,
            "unitPrice": 0.6,
            "totalAmount": 3,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:46:26.78",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          },
          {
            "pumpNo": "P07",
            "transDate": "2023-03-05T00:00:00",
            "stationId": 20102,
            "itemNo": "10117",
            "shiftNo": 2,
            "startReading": 10,
            "callibrReturnLt": 10,
            "callibrReturnAmount": 0.95,
            "totalSalesLt": 10,
            "unitPrice": 0.096,
            "totalAmount": 0.96,
            "originator": null,
            "status": 1,
            "remark": null,
            "cat1": null,
            "cat2": null,
            "dateCreated": "2023-03-04T23:41:14.63",
            "dateUpdated": null,
            "userCreated": "80016",
            "userUpdated": null,
            "cat3": null,
            "endReading": 8,
            "stationDscar": "محطة المصدار",
            "jdeIntegrationId": 20102,
            "stationDscen": "Al-Mesdar",
            "stationStatus": 1,
            "phone": null,
            "stationCat1": "1",
            "expr3": null
          }
        ];
      }, 2000);

    }
  },
  mounted() {
    //this.$refs.grid.filterSettings.showFilterBarOperator = true;
    console.log("Mounted")
    console.log(this.CheckBoxSelection)
  },
}
</script>
