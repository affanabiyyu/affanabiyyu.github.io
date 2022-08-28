---
layout: "../../layouts/DevBlogPost.astro"
title: "dev log 2 - nyoba astro"
description: "devLog ke 2 tentang mencoba astro js"
pubDate: "August 28 2022 06:03"
updatedDate: "August 28 2022 07:00"
---

### 💭 Mikir arsitektur website
Udah lama nggak ngoding, lama banget (1-2 tahun mungkin?). Beberapa hari ini mulai ngoding lagi karena mau nyelesaikan Website studio komik temen saya, dan dimulai dari nyari framework / arsitektur yang tepat buat proyeknya.

Saya cuma punya pengalaman ngoding website pakai HTML, CSS, dan JS sederhana, juga framework Svelte. HTML CSS JS pun nggak terlalu dalam pemahaman saya, ditambah lagi udah lupa semua. Dan framework Svelte nggak cocok untuk proyek saya saat ini, karena rencananya websitenya butuh SEO yang baik (sedangkan Svelte pakai teknologi Client-Side Rendering yang lebih cocok buat aplikasi web daripada website semacam Blog / konten statis)

Terus nemu Svelte-Kit, tapi Svelte-Kit ternyata SSR (Server Side Rendering) dan bakal butuh Hosting buat servernya. Saya bertanya-tanya kira-kira ada nggak ya yang kayak HTML static biasa, tapi pakai bahasa Svelte, supaya bisa pakai fitur-fitur Svelte.

Ternyata akhirnya nemu namanya Elder.JS. Berhari-hari belajar dari dokumentasinya, ternyata meskipun agak ribet tapi kalau diusahaiin bisa aja dipakai. Tapi beberapa hari kemudian nemu Astro, yang kayaknya lebih bagus & lebih banyak dokumentasinya. Jadi akhirnya pakai Astro, karena dia Static Page Generator dan bisa pakai svelte juga.

Kemudian untuk hostingnya setelah riset mandiri, kayaknya bakal pakai Netlify, karena ada fitur Netlify CMS, yang disana bisa nambah konten, tanpa harus pakai interface coding / ngeliat barisan koding. Hal ini penting karena nantinya website ini bukan cuma saya yang nambah kontennya, tapi anak-anak studio juga.

### 💭 Blog abito
Akhirnya setelah teknologinya udah fix mau pakai apa, saya mau coba-coba dulu. Dan dibuatlah website / blog ini, buat nyoba-nyoba slug nya, juga fitur svelte dalam astro, dan lain-lain. Sekaligus buat nyatet pengalaman ngoding juga, karena kebetulan saya suka nulis & ngetik.

### 💭 Melihat proses coding sejauh ini
Sebenernya beberapa hari ini belum bisa dibilang ngoding, karena cuma utak-atik dan baca-baca dokumentasi. Juga setting git di PC lokal, udah lupa semua caranya wkwk ... git add, git push, dll. Akhirnya tapi inget soalnya baca-baca.

Saya juga buat trello (kanban) pribadi untuk ngoding, meski belum terimplementasi secara maksimal, tapi lumayan buat ngetrack to do list untuk hari ini. Kapan-kapan saya share di sini tentang ini.

Beberapa hari ini juga ngerapiin file-file codingan lama di local. Udah beneran lupa semua saya. Namun kayaknya bakal saya urutin pelan-pelan harus ngapain aja.

---

## ✅ (beberapa) hari ini sudah ngapain aja
- belajar dasar-dasar git
- setting otorisasi git di local (ssh)
- nyoba astro & github pages
	- nyoba template dasar
	- nambahin package svelte, scss, tailwind ke astro
	- push ke github pages (pakai github action)
	- edit tampilan website & warna (css) ke dark mode

## 🕒 besok mau ngapain
- menata ulang folder & kanban coding lama
- ngerjain ioh dicoding
- (mungkin)
	- nyoba tailwind
	- nyoba nambah fitur 'tag' / 'kategori' di blog post