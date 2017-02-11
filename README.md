#The problem: Optimizing chunks.

I have a small entry chunk (index.js) that always loads the app.js (which imports for example jQuery).

Under some circumstances either special-1.js or special-2.js are loaded, which import app.js as also backbone.

Normally webpack would include Backbone in each of the generated special-* chunks.

This should be optimized:

So that in general only app.js including jquery is loaded and in case of special-1, the normal special-1 chunk + an additional backbone chunk, that can be shard with special-2.

But I can not achieve this: If I use the `CommonsChunkPlugin` I can only achieve that the backbone chunk is merged into the normal app chunk.

How can I solve this problem? I would need something to say, that app.js is kind of an entry chunk?
