import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { ResponsiveContainer } from '@/components/ui/responsive-container';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  hero_image_url?: string;
  published_at: string;
  body: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('id, slug, title, subtitle, hero_image_url, published_at, body')
        .eq('status', 'published')
        .not('published_at', 'is', null)
        .lte('published_at', new Date().toISOString())
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const getExcerpt = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  };

  return (
    <>
      <SEO 
        title="AI Insights & Industry Resources - LeapGen.AI Blog"
        description="Discover the latest in AI technology, industry insights, and business transformation strategies. Expert analysis on enterprise AI solutions, automation, and digital innovation."
        keywords="AI blog, artificial intelligence insights, enterprise AI, business automation, digital transformation, AI industry news"
        url="https://leapgen.ai/blog"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' }
        ]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <ResponsiveContainer size="xl" padding="lg">
            <div className="text-center space-y-6">
              <Badge variant="outline" className="mb-4">
                AI Insights & Resources
              </Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Stay Ahead with{' '}
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  AI Insights
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the latest trends, strategies, and innovations in artificial intelligence. 
                From implementation guides to industry analysis, we share insights that drive business transformation.
              </p>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <ResponsiveContainer size="xl" padding="lg">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="mt-4 text-muted-foreground">Loading posts...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
                <p className="text-muted-foreground">Check back soon for the latest AI insights!</p>
              </div>
            ) : (
              <div className="grid gap-8 md:gap-12">
                {/* Featured Post */}
                {posts[0] && (
                  <EnhancedCard variant="default" className="overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {posts[0].hero_image_url && (
                        <div className="aspect-video lg:aspect-square overflow-hidden rounded-lg">
                          <img 
                            src={posts[0].hero_image_url} 
                            alt={posts[0].title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className={`space-y-4 ${!posts[0].hero_image_url ? 'lg:col-span-2' : ''}`}>
                        <Badge variant="outline">Featured</Badge>
                        <h2 className="text-3xl font-bold text-foreground">
                          <Link 
                            to={`/blog/${posts[0].slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {posts[0].title}
                          </Link>
                        </h2>
                        {posts[0].subtitle && (
                          <p className="text-lg text-muted-foreground">{posts[0].subtitle}</p>
                        )}
                        <p className="text-muted-foreground leading-relaxed">
                          {getExcerpt(posts[0].body, 200)}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(posts[0].published_at)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {getReadingTime(posts[0].body)} min read
                          </div>
                        </div>
                        <Link 
                          to={`/blog/${posts[0].slug}`}
                          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                        >
                          Read Article <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </EnhancedCard>
                )}

                {/* Other Posts Grid */}
                {posts.length > 1 && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.slice(1).map((post) => (
                      <EnhancedCard key={post.id} variant="default" className="group">
                        {post.hero_image_url && (
                          <div className="aspect-video overflow-hidden rounded-lg mb-4">
                            <img 
                              src={post.hero_image_url} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-foreground">
                            <Link 
                              to={`/blog/${post.slug}`}
                              className="hover:text-primary transition-colors"
                            >
                              {post.title}
                            </Link>
                          </h3>
                          {post.subtitle && (
                            <p className="text-muted-foreground">{post.subtitle}</p>
                          )}
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {getExcerpt(post.body)}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(post.published_at)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {getReadingTime(post.body)} min
                            </div>
                          </div>
                        </div>
                      </EnhancedCard>
                    ))}
                  </div>
                )}
              </div>
            )}
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default Blog;
