/* Layout blueprint for index page to fill the background image over the whole page */
<template>
    <div class="flex flex-col min-h-screen bg-[#171a21]">
        <header class="shadow-sm bg-[#1b2838]">
            <nav class="container mx-auto p-4 flex items-center justify-between gap-4">
                <NuxtLink to="/" class="font-bold text-[#66c0f4] shrink-0">Steam Games Archive</NuxtLink>
                <div class="w-80">
                    <SearchBar />
                </div>
                <ul class="flex gap-4">
                    <NavLinks to="/" label="Home" />
                    <NavLinks to="/games" label="Games" />
                    <NavLinks to="/developers" label="Developers" />
                    <NavLinks to="/genres" label="Genres" />
                    <NavLinks to="/dashboard" label="Dashboard" />
                    <AuthLink />
                </ul>
            </nav>
        </header>

        <main class="flex-1 text-[#66c0f4]">
            <slot />
        </main>
        <ToastMessage />

        <footer>
            <div class="container mx-auto p-4 text-center text-sm text-[#66c0f4]">
                Copyright &copy; {{ new Date().getFullYear() }} Steam Games Archive
            </div>
        </footer>
    </div>
</template>
