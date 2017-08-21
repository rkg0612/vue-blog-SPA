var blog = new Vue({
	el: '#blogapp',
	data:{
		seenNew: true,
		seenUpd: false,
		title: '',
		content: '',
		blogs: []
	},
	methods:{
		addblog: function(){
			this.blogs.push ({ title: this.title, content: this.content });
			this.id = this.length;
			this.title = '';
			this.content = '';
			this.storeBlog();
		},
		editblog: function(id){
			index = id;
			this.title = this.blogs[index].title;
			this.content = this.blogs[index].content;
			this.seenNew = false;
			this.seenUpd = true;
		},
		updBlog: function(){
			this.blogs.splice (index, 1,{ title: this.title, content: this.content });
			var JSONBlog = JSON.stringify(this.blogs);
			localStorage.setItem('blogs', JSONBlog);
			this.title = '';
			this.content = '';
			this.seenUpd = false;
			this.seenNew = true;
		},
		loadBlog: function(){
			if(localStorage.getItem("blogs") === null){
				var tempval = [];
				localStorage.setItem('blogs', JSON.stringify(tempval));
			}else{
				var valBlogs = localStorage.getItem('blogs');
				var parseJSONBlog = JSON.parse(valBlogs);
				this.blogs = parseJSONBlog;
			}
		},
		storeBlog: function(){
			var JSONBlog = JSON.stringify(this.blogs);
			localStorage.setItem('blogs', JSONBlog);	
		}

	},
	created: function(){
		this.loadBlog()
	}
})