import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { ResponsiveContainer } from '@/components/ui/responsive-container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  body: string;
  hero_image_url?: string;
  published_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  const fetchPost = async (postSlug: string) => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', postSlug)
        .eq('status', 'published')
        .not('published_at', 'is', null)
        .lte('published_at', new Date().toISOString())
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          setNotFound(true);
        } else {
          throw error;
        }
      } else {
        setPost(data);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setNotFound(true);
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

  const formatContent = (content: string) => {
    // Simple content formatting - convert line breaks to paragraphs
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO 
        title={`${post.title} - LeapGen.AI Blog`}
        description={post.subtitle || post.body.substring(0, 160) + '...'}
        keywords="AI insights, artificial intelligence, enterprise AI, business automation"
        url={`https://leapgen.ai/blog/${post.slug}`}
        image={post.hero_image_url}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` }
        ]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-subtle">
          <ResponsiveContainer size="lg" padding="lg">
            <div className="space-y-6">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              
              <div className="space-y-4">
                <Badge variant="outline">Article</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  {post.title}
                </h1>
                {post.subtitle && (
                  <p className="text-xl text-muted-foreground">{post.subtitle}</p>
                )}
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.published_at)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {getReadingTime(post.body)} min read
                  </div>
                </div>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Hero Image */}
        {post.hero_image_url && (
          <section className="py-8">
            <ResponsiveContainer size="lg" padding="lg">
              <div className="aspect-video md:aspect-[21/9] overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src={post.hero_image_url} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </ResponsiveContainer>
          </section>
        )}

        {/* Article Content */}
        <section className="py-12">
          <ResponsiveContainer size="md" padding="lg">
            <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <div className="text-foreground leading-relaxed">
                {formatContent(post.body)}
              </div>
            </article>
          </ResponsiveContainer>
        </section>

        {/* Back to Blog CTA */}
        <section className="py-12 border-t border-border">
          <ResponsiveContainer size="lg" padding="lg">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Explore More AI Insights
              </h3>
              <p className="text-muted-foreground">
                Discover more articles about artificial intelligence, automation, and digital transformation.
              </p>
              <Button asChild size="lg">
                <Link to="/blog" className="inline-flex items-center gap-2">
                  View All Articles <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default BlogPost;