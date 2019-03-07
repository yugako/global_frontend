<template>
	<transition name="slide-fade">
		<div v-if='showWorkers' class="wrapper">
			<div class="empty-list" v-if='workers.length === 0'>
				Oops... cannot get workers list.<br> Please, refresh page or write us about this problem
			</div>
			<div v-else  class="table-content table-responsive">
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
			            <tr v-for='(worker,index) in workers' v-if='worker.role !== "admin"' :key='worker._id'>
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
			           			<span @click='goToEditWorker(worker.name)' class="actions-button button">Edit</span>

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
		created () {
			if(this.$store.getters.logged) {
				axios.get(this.$store.state.BASE_USERS_URL)
				.then(response => {
					this.workers = response.data;
				})
				.catch(e => {
					console.log(e);
					if (e.response.status === 401) {
						this.$router.push({
						    name: 'home'
						});
						this.$store.commit('showForm');
						this.$store.commit('showLogin');
					}
				})
			} else {
				this.$router.push({
				    name: 'home'
				});
				this.$store.commit('showForm');
				this.$store.commit('showLogin');
			}
			
		},
		data() {
			return {
				workers: []
			}
		},
		methods: {
			goToEditWorker(name) {
			    this.$router.push({name:'edit',params:{name: this.friendlyUrl(name)}})
			},
			
			addNewWorker() {
				this.$router.push({ name: 'add_worker'}) 
			},
			removeFromWorkers (id) {
			  	this.$store.dispatch('deleteWorkers', id);
			  	this.workers = this.$store.getters.Workers;
			},
			friendlyUrl(value) {
			      value = value.replace(/\s/g, "_");
			      return value;
			}
		}
	}
</script>