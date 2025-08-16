
-- 1) Create a public storage bucket for blog images/assets
insert into storage.buckets (id, name, public)
values ('blog-assets', 'blog-assets', true);

-- 2) RLS policies for the bucket:
-- Allow anyone to read (list/download) files in blog-assets
create policy "Public read for blog-assets"
on storage.objects
for select
using (bucket_id = 'blog-assets');

-- Allow service role to perform any action (upload, update, delete, list)
create policy "Service role can manage blog-assets"
on storage.objects
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');
