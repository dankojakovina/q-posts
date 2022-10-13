<template>
	<div>
		<select @change="change" :value="value">
			<option v-for="(option, index) of options" :value="option" :key="index">{{ option }}</option>
		</select>
	</div>  
</template>

<script>
export default {
    name: 'QSelect',
    props: {
        label: {
            required: false,
            Type: String,
            default: ''
        },
        options: {
            required: false,
            type: Array,
            default: () => []
        },
        value: {
            required: false,
            type: String,
            default: ''
        }
    },
    data() {
        return {
          
        }
    },
    methods: {
        change(evt) {
            this.$emit('change', evt.target.value);
        }
    }

}
</script>

<style scoped>
/* toggle in label designing */
.toggle {
    position: relative;
    display: inline-block;
    width: 35px;
    height: 15px;
    background-color: #ccc;
    border-radius: 30px;
}

/* After slide changes */
.toggle:after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #eee;
    left: 1px;
    transition: all 0.3s;
    cursor: pointer;
}

label {
    margin-bottom: 0;
}

/* Toggle text */
p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

/* Checkbox checked effect */
.checkbox:checked+.toggle::after {
    left: 20px;
}

/* Checkbox checked toggle label bg color */
.checkbox:checked+.toggle {
    background-color: #65e980;
}

/* Checkbox vanished */
.checkbox {
    display: none;
}
</style>