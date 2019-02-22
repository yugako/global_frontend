<template>
	<transition name="slide-fade">
		<div v-if='showWorkers' class="wrapper">
			<div class="table-content table-responsive">
			    <table>
			        <thead>
			            <tr class="title-top">
			                <th>Name</th>
			                <th>Username</th>
			                <th>Password</th>
			             	<th>Actions</th>
			            </tr>
			        </thead>
			        <tbody>
			            <tr v-for='(worker,index) in workersList' v-if='worker.role !== "admin"' :key='worker._id'>
			                <td class="worker-name">
			                	{{worker.name}}
			                </td>
			                <td class="worker-name">
			                	{{worker.username}}
			                </td>
			                <td class="worker-password">
			                	{{worker.password}}
			                </td>
			                <td class="actions">
			           			<span @click='goToEditWorker(worker._id)' class="actions-button button">Edit</span>

			                	<span @click='removeFromWorkers(worker._id)' class="actions-button button">Remove</span>
			                </td>
			            </tr>
			            
			        </tbody>
			    </table>
			</div>
			<div class="admin-content__add">
				<button @click='addNewWorker' class="admin-content__add_button">Add worker</button>
			</div>
			<!-- /.admin-content__add -->
		</div>
		<!-- /.wrapper -->
	</transition>
</template>
<script>
	import axios from 'axios';

	export default {
		name: 'WorkersTable',
		beforeCreate: function() {
		  	if(this.$store.getters.logged) {
			  	this.$options.computed = {
			     	workersList(){
				     	return this.$store.getters.Workers
				 	},
				 	showWorkers () {
				 	 	return this.$store.getters.ShowWorkers
				 	}
			  	}
			} else {
				this.$router.push({
				    name: 'home'
				});
				this.$store.commit('showForm');
				this.$store.commit('showLogin');
			}
		},
		methods: {
			goToEditWorker(id) {
			    this.$router.push({name:'edit',params:{id:id}})
			},
			
			addNewWorker() {
				this.$router.push({ name: 'add_worker'}) 
			},
			removeFromWorkers (index) {
			  	this.$store.dispatch('deleteWorkers', index)
			},
		}
	}
</script>