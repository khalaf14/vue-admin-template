<template>
    <div>
        <h2>Stations Page</h2>
        <base-form :fields="stationFields" @form-submitted="handleFormSubmission" @form-canceled="handleFormCancellation" />
    </div>
</template>

<script>
import BaseForm from '../../../components/AddFormBase/BaseForm.vue';

export default {
    components: {
        BaseForm
    },
    data() {
        return {
            stationFields: [
                { key: 'stationName', type: 'text', placeholder: 'Station Name' },
                { key: 'location', type: 'text', placeholder: 'Location' },
                // Add more fields specific to the Stations page
            ]
        };
    },
    methods: {
        handleFormSubmission(formData) {
            // Handle form submission logic specific to the Stations page
            console.log('Stations form submitted:', formData);
        },
        handleFormCancellation() {
            // Handle form cancellation logic specific to the Stations page
            console.log('Stations form canceled');
        }
    }
};
</script>