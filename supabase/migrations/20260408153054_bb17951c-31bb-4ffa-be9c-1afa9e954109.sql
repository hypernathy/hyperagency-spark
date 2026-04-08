
-- 1. user_roles: only admins can INSERT roles
CREATE POLICY "Only admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 2. courses_waitlist: tighten INSERT to enforce user_id = auth.uid()
DROP POLICY IF EXISTS "Authenticated users can insert waitlist" ON public.courses_waitlist;

CREATE POLICY "Users can add themselves to waitlist"
ON public.courses_waitlist
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);
