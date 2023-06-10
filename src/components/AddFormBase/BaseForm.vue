<template>
    <div>
        <!-- Your form markup and fields -->
        <form @submit.prevent="submitForm">
            <!-- Dynamic form fields -->
            <template v-for="field in fields">
                <input v-if="field.type === 'text'" type="text" v-model="form[field.key]"
                    :placeholder="field.placeholder" />
                <input v-else-if="field.type === 'email'" type="email" v-model="form[field.key]"
                    :placeholder="field.placeholder" />
                <!-- Add more field types as needed -->
            </template>

            <!-- Form actions -->
            <button type="submit">Submit</button>
            <button type="button" @click="cancelForm">Cancel</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        fields: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            form: {}
        };
    },
    methods: {
        submitForm() {
            // Form submission logic
            // You can emit an event or call a method in the parent component to handle the form submission
            this.$emit('form-submitted', this.form);
        },
        cancelForm() {
            // Form cancellation logic
            // You can emit an event or call a method in the parent component to handle the form cancellation
            this.$emit('form-canceled');
        }
    }
};
</script>

<style scoped>
/* Your component styles */
</style>
