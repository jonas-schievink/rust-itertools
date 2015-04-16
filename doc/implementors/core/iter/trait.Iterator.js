(function() {var implementors = {};
implementors['itertools'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;I, J&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Interleave.html' title='itertools::Interleave'>Interleave</a>&lt;I, J&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;B, I&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.FnMap.html' title='itertools::FnMap'>FnMap</a>&lt;B, I&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;I&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.PutBack.html' title='itertools::PutBack'>PutBack</a>&lt;I&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;I, J&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Product.html' title='itertools::Product'>Product</a>&lt;I, J&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;I&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Dedup.html' title='itertools::Dedup'>Dedup</a>&lt;I&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;B, F, I&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Batching.html' title='itertools::Batching'>Batching</a>&lt;I, F&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;K, I, F&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.GroupBy.html' title='itertools::GroupBy'>GroupBy</a>&lt;K, I, F&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;I&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Step.html' title='itertools::Step'>Step</a>&lt;I&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;I, J, F&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Merge.html' title='itertools::Merge'>Merge</a>&lt;I, J, F&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;I&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.MultiPeek.html' title='itertools::MultiPeek'>MultiPeek</a>&lt;I&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;I&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Intersperse.html' title='itertools::Intersperse'>Intersperse</a>&lt;I&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;I&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.ISlice.html' title='itertools::ISlice'>ISlice</a>&lt;I&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;F&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Linspace.html' title='itertools::Linspace'>Linspace</a>&lt;F&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;X, T, I&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/misc/struct.FlatTuples.html' title='itertools::misc::FlatTuples'>FlatTuples</a>&lt;I&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;A, I&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.RcIter.html' title='itertools::RcIter'>RcIter</a>&lt;I&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Stride.html' title='itertools::Stride'>Stride</a>&lt;'a, A&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.StrideMut.html' title='itertools::StrideMut'>StrideMut</a>&lt;'a, A&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;I&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Tee.html' title='itertools::Tee'>Tee</a>&lt;I&gt;","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Times.html' title='itertools::Times'>Times</a>","<a class='stability Stable' title='Stable'></a>impl&lt;A, B, T, U&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.ZipLongest.html' title='itertools::ZipLongest'>ZipLongest</a>&lt;T, U&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A,)</a>&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;A, B&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B)</a>&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;A, B, C&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C)</a>&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;A, B, C, D&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C, D)</a>&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;A, B, C, D, E&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C, D, E)</a>&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;A, B, C, D, E, F&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C, D, E, F)</a>&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;A, B, C, D, E, F, G&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C, D, E, F, G)</a>&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;A, B, C, D, E, F, G, H&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C, D, E, F, G, H)</a>&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;A, B, C, D, E, F, G, H, I&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C, D, E, F, G, H, I)</a>&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
